var myApp = angular.module('myApp', ['ui.bootstrap', 'ngRoute']);

/// Routes ///
myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl : 'views/templates/home.html',
            controller: 'HomeController',
            controllerAs: 'home'
        })
        .when('/project-1', {
            templateUrl : 'views/templates/project1.html',
            controller: 'ProjectsController',
            controllerAs: 'project'
        })
        .when('/project-2', {
            templateUrl : 'views/templates/project2.html',
            controller: 'ProjectsController',
            controllerAs: 'project'
        })
        .when('/project-3', {
            templateUrl : 'views/templates/project3.html',
            controller: 'ProjectsController',
            controllerAs: 'project'
        })
        .when('/project-4', {
            templateUrl : 'views/templates/project4.html',
            controller: 'ProjectsController',
            controllerAs: 'project'
        })
        .otherwise({
            redirectTo: 'home'
        });
}]);
