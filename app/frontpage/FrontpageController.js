app.controller('FrontpageController', function ($scope, bnDataFactory) {


    bnDataFactory.getFrontpageStories().success(function (data) {


        // This cleans up some abbreviations in the json

        data.forEach(function (story) {
            if (story.url === "") {
                story.url = "#/comments/" + story.storyId;
                story.source = "bN Discussion Thread";
            } else {
                var parser = document.createElement('a');
                parser.href = story.url;
                story.source = parser.hostname;

            }


        });
        $scope.stories = data;
    });
});