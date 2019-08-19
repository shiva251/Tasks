var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.htm"
    })
    .when("/home", {
        templateUrl : "home.html"
    })
    .when("/link1", {
        templateUrl : "link.html"
        controller : "myCtrl"
    })
    .when("/link2", {
        templateUrl : "link2.html"
        controller : "myCtrl1"
    });
});
app.controller('myCtrl', function($scope){
    $scope.hello='hello shiva';
    });
    app.controller('myCtrl1', function($scope){
        $scope.hello1='welcome';
    });