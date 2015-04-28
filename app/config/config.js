var fs = require('fs')

module.exports = {
    local : {
        app : {
            name : 'Passport SAML strategy example',
            port : process.env.PORT || 80,
            database : {
                name : "digitaltulip",
                host : "localhost",
                port : "27017"
            },
            iamserver : "iam.digitaltulip.net"

        },
        passport: {
            strategy : 'saml',
            saml : {
                path : '/login/callback',
                entryPoint : 'https://iam.digitaltulip.net/openam/SSORedirect/metaAlias/ActiveDirectory/idp',
                logoutUrl : 'https://iam.digitaltulip.net/openam/IDPSloRedirect/metaAlias/ActiveDirectory/idp',
                issuer : 'passport-saml',
                callbackUrl: 'http://portal.digitaltulip.net/login/callback',
                cert: fs.readFileSync('./cert/forgerock.pem', 'utf-8')
            }
        }
    },
    dev : {
        app : {
            name : 'Passport SAML strategy example',
            port : process.env.PORT || 8080,
            database : {
                name : "digitaltulip",
                host : "localhost",
                port : "27017"
            },
            iamserver : "iam.dev.digitaltulip.net"

        },
        passport: {
            strategy : 'saml',
            saml : {
                path : '/login/callback',
                entryPoint : 'https://iam.dev.digitaltulip.net/openam/SSORedirect/metaAlias/ActiveDirectory/idp',
                logoutUrl : 'https://iam.dev.digitaltulip.net/openam/IDPSloRedirect/metaAlias/ActiveDirectory/idp',
                issuer : 'passport-saml',
                callbackUrl: 'http://portal.dev.digitaltulip.net/login/callback',
                cert: fs.readFileSync('./cert/forgerock.pem', 'utf-8')
            }
        }
    },

    demo : {
        app : {
            name : 'Passport SAML strategy example',
            port : process.env.PORT || 8080,
            database : {
                name : "digitaltulip",
                host : "localhost",
                port : "27017"
            },
            iamserver : "iam.digitaltulip.net"

        },
        passport: {
            strategy : 'saml',
            saml : {
                path : '/login/callback',
                entryPoint : 'https://iam.digitaltulip.net/openam/SSORedirect/metaAlias/ActiveDirectory/idp',
                logoutUrl : 'https://iam.digitaltulip.net/openam/IDPSloRedirect/metaAlias/ActiveDirectory/idp',
                issuer : 'passport-saml',
                callbackUrl: 'http://portal.digitaltulip.net/login/callback',
                cert: fs.readFileSync('./cert/forgerock.pem', 'utf-8')
            }
        }
    }
}