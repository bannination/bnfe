var app = angular.module('bnfe', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider

        .when('/',
        {
            controller: "FrontpageController",
            templateUrl: "app/frontpage/_frontpage.html"
        })

        .when('/comments/:storyId',
        {

            templateUrl: "app/storypage/_storypage.html"
        })

        .otherwise({ redirectTo: "/" })
    ;

});