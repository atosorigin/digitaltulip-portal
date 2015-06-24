var https = require ('https');

module.exports = {
	getNotifications: function(priority, callback)
	{
        var parsed = JSON.parse('{"result":[{"author":{"link":"http://www.theengineer.co.uk/XmlServers/navsectionRSS.aspx?navsectioncode=213&num=20"},"short_description":"Researchers in the US have created a new honeycomb-like structure designed to withstand heavy impacts"}, {"author":{"link":"http://www.theengineer.co.uk/XmlServers/navsectionRSS.aspx?navsectioncode=213&num=20"},"short_description":"A soft robotics system has shown the ability to mimic patterns used by squid to distract prey"},{"author":{"link":"http://www.theengineer.co.uk/XmlServers/navsectionRSS.aspx?navsectioncode=213&num=20"},"short_description":"Engineers at BAE Systems are working with a Birmingham University"}]}');
  
        callback(parsed);
	}
}

