app.factory('bnDataFactory', function ($http) {
    var factory = {};
    var urlRoot = "/v3/"
    factory.getFrontpageStories = function () {
        return $http.get(urlRoot + "stories/frontpage");
    };
    return factory;
});