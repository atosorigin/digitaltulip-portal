angular.module('XaaP', ['ngRoute', 'DefaultCtrl', 'MainCtrl', 'appRoutes', 'default', 'application', 'gridster', 'notification', 'authService'])
.config(function($locationProvider, $httpProvider){
    $httpProvider.interceptors.push(function($q, $window) {
        return {
            response: function(response) {
                // do something on success
                return response;
            },
            responseError: function(response) {
                if (response.status === 401)
                    $window.location = "/login";
                return $q.reject(response);
            }
        };
    });


});