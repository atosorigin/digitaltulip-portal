module.exports = function(app, passport) {

    var Application = require('../models/application');
    var Entitlements = require('../models/entitlements')
    var Notifications = require('../models/notifications');

    function parseCookies(request) {
        var list = {},
            rc = request.headers.cookie;

        rc && rc.split(';').forEach(function(cookie) {
            var parts = cookie.split('=');
            list[parts.shift().trim()] = decodeURI(parts.join('='));
        });

        return list;
    }


    var auth = function(req, res, next) {
        if (!req.isAuthenticated())
            res.sendStatus(401);
        else
            next();
    };

    app.get('/', function(req, res) {
        if (!req.isAuthenticated()) {
            res.redirect('/login');

        } else {
            res.render("index", {
                user: req.user
            });
        }

    });

    app.get('/login/callback', function(req, res) {
        //In the event of back call redirect to login
        res.redirect('/login');
    });

    app.post('/login/callback',
        passport.authenticate('saml',{failureRedirect: '/login' }),
        function(req, res) {
            var cookies = parseCookies(req);
            req.session.ssotoken = cookies.iPlanetDirectoryPro;
            res.user = req.user
            res.redirect('/');
        }
    );

    app.get('/login',
        passport.authenticate('saml', {
            failureRedirect: '/login',
            failureFlash: true
        }),
        function(req, res) {
            res.redirect('/');
        }
    );

    app.get('/signout', auth,
        function(req, res) {
            var ssotoken = req.session.ssotoken;
            if (ssotoken) {

                var https = require('https');
                var openreq;
                var env = process.env.NODE_ENV || 'local',
                    config = require('../config/config')[env];

                var options = {
                    host: config.app.iamserver,
                    port: 443,
                    path: "/openam/json/sessions/?_action=logout&realm=ActiveDirectory",
                    method: "POST",
                    headers: {
                        'iPlanetDirectoryPro': ssotoken,
                        'Content-Type': 'application/json'
                    }
                };

                openreq = https.request(options, function(jsonres) {
                    req.session.destroy();
                    res.status(200).send();
                });

                //openreq.on('end', function(){

                //})


                openreq.on('socket', function(socket) {
                    socket.setTimeout(1000);
                    socket.on('timeout', function() {
                        openreq.abort();
                        if (req.session) {
                            req.session.destroy();
                        }
                    });
                });

                openreq.on('error', function(err) {
                    if (err.code === "ECONNRESET") {
                        res.status(500).send(0);
                    }
                });

                openreq.end();
            }
        }
    );

    app.get('/sso/metadata', function(req, res) {
        res.type('application/xml')
        res.status(200).send(samlstrategy.getsamlMetadata())
    });

    app.get('/loggedin', function(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    });

    app.get('/api/application/', auth, function(req, res) {

        Entitlements.getEntitlements(req.user.email, function(data) {
            Application.find({
                'role': {
                    $in: data
                }
            }, function(err, applications) {
                if (err) {
                    res.send(err)
                } else {
                    res.status(200).send(applications);
                }
            });
        });

    });

    app.get('/api/notification/', auth, function(req, res) {
        Notifications.getNotifications("News", function(data) {
            res.status(200).send(data);
        })
    });

    app.post('/api/application/', auth, function(req, res) {
        Application.create({
            name: req.body.name,
            description: req.body.description,
            url: req.body.url,
            image: req.body.image

        }, function(err, application) {

            if (err) {
                res.send(err);
            }

            res.json(application); // return all todos in JSON format
        });

    });


};
