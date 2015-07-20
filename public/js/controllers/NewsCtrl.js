angular.module('NewsCtrl', []).controller('NewsController', ['$scope', '$location', '$http', '$window', 'news', function($scope, $location, $http, $window, news) {

	$scope.firstNews = function () {
		news.get().success(function(data) {

			alert(data);

		})
	};

}]);
