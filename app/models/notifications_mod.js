var https = require ('https');

module.exports = {
	getNotifications: function(priority, callback)
	{
        var parsed = JSON.parse('{"result":[{"author":{"link":"http://www.theengineer.co.uk/home/honeycomb-structure-offers-energy-absorbing-applications/1020523.article"},"short_description":"Researchers in the US have created a new honeycomb-like structure designed to withstand heavy impacts"}, {"author":{"link":"http://www.theengineer.co.uk/aerospace/news/reconfiguring-robots-learn-to-look-after-themselves/1018893.article"},"short_description":"A soft robotics system has shown the ability to mimic patterns used by squid to distract prey"},{"author":{"link":"http://www.birmingham.ac.uk/schools/eese/news/bae-systems-research-contract-hit-team.aspx"},"short_description":"Engineers at BAE Systems are working with a Birmingham University"}]}');
  
        callback(parsed);
	}
}

