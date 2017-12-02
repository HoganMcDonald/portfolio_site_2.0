let app = angular.module('admin', ['ngSanitize']);

app.controller('adminController', function($sanitize, $scope, $http) {

  $scope.renderHTML = function() {
    $scope.posthtml = $sanitize(marked($scope.postmd));
  };

  $scope.sendMD = function() {
    console.log($scope.postmd);
    const params = {
      fileName: $scope.title,
      password: $scope.password,
      file: $scope.postmd
    }

    $http.post('/blog/admin/newPost', params).then(response => {
      alert('success');
    });
  };

});
