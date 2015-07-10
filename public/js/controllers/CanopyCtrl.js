angular.module('CanopyCtrl', []).controller('CanopyController', ['$scope', '$location', '$http', '$window', 'cloudfabric', function($scope, $location, $http, $window, cloudfabric) {

	$scope.pressed = function () {
		cloudfabric.get().success(function(data) {
			alert(data.password);
		})
	};
}]);
