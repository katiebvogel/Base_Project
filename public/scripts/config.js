var app = angular.module('baseApp', ['ngRoute']);


  angular.module('baseApp').config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'MainController as main'
      })
      .when('/template', {
        templateUrl: 'views/template.html',
        controller: 'TemplateController as template'
      })
      
    $locationProvider.html5Mode(true);

  }); //end  module.config
