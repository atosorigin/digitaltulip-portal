angular.module('authService', [])

	.factory( 'authService', [ '$http' ,function($http)  {
	  var currentUser;

	  return {

	  	     currentUser: function() { 

	  	     	return	$http.get('/loggedin'); 
	  	     }
	  };
	}]);