angular.module('CanopyCtrl', []).controller('CanopyController', ['$scope', '$location', '$http', '$window', 'cloudfabric', function($scope, $location, $http, $window, cloudfabric) {

	$scope.newCFAccount = function () {
		cloudfabric.get().success(function(data) {
			alert(data.password);
		})
	};

}]);
