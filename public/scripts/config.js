var app = angular.module('baseApp', ['ngRoute']);


  angular.module('baseApp').config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/tempate', {
        templateUrl: 'views/template.html',
        controller: 'MainController as main'
      })

    $locationProvider.html5Mode(true);

  }); //end  module.config
