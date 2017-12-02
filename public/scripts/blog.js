let app = angular.module('blogApp', ['ngSanitize']);


app.controller('blogController', function($scope, $http, $sanitize) {
  $scope.posts = [];

  $scope.loadPosts = (numberLoaded)=> {
    $http.get('/blog/post/undefined.md')
      .then(response => {
        $scope.posts.push($sanitize(response.data));
        console.log($scope.posts);
      });
  };
});
