angular.module('CanopyCtrl', []).controller('CanopyController', ['$scope', '$location', '$http', '$window', 'cloudfabric', function($scope, $location, $http, $window, cloudfabric) {

	$scope.newCFAccount = function () {
		cloudfabric.get().success(function(data) {

			document.getElementById("cloudFabricContent").innerHTML = "Your Cloud Fabric credentials are as follows:" +
					"</br></br> <b>User name:</b> "+ data.username +
					"</br> <b>Password:</b> "+ data.password +
					"</br> <b>API endpoint:</b> "+ data.api_endpoint +
					"</br> <b>Org:</b> "+ data.org +
					"</br> </br>  Please ensure that you remember these details as they are required for your Cloud Fabric login."
			;

		})
	};

}]);
