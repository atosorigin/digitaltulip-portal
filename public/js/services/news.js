angular.module('news', [])

// super simple service
// each function returns a promise object
	.factory('news', ['$http',function($http) {
		return {
		get : function() {
			return $http.get('http://micro-news.apps.tai-dev3.cfdev.canopy-cloud.com/all');
		}
	}
}]);