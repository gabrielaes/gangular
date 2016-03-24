var app = angular.module('menu', ['ngRoute', 'ngAnimate']);

app.controller('HomeController', function($scope) {
    $scope.title = 'Home';
    $scope.description = 'Home page!';
	$scope.indexTemp = 'hello world';
});

app.controller('NewsController', function($scope) {
    $scope.title = 'News';
    $scope.description = 'News page!';
});

app.controller('ContactController', function($scope) {
    $scope.title = 'Contact';
    $scope.description = 'Contact page!';
});

app.controller('AboutController', function($scope) {
    $scope.title = 'About';
    $scope.description = 'About page!';
});

app.config(function($routeProvider) {
  $routeProvider
   .when('/', {
		templateUrl : 'home.html',
        controller  : 'HomeController',
        controllerAs: 'home'
   })
   .when('/news', {
		templateUrl : 'news.html',
        controller  : 'NewsController',
        controllerAs: 'news'
   })
   .when('/contact', {
		templateUrl : 'contact.html',
        controller  : 'ContactController',
        controllerAs: 'contact'
   })
   .when('/about', {
		templateUrl : 'about.html',
        controller  : 'AboutController',
        controllerAs: 'about'
   });
});
