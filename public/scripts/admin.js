let app = angular.module('admin', ['ngSanitize']);

app.controller('adminController', function($sanitize, $scope, $http) {

  $scope.renderHTML = function() {
    $scope.posthtml = $sanitize(marked($scope.postmd));
  };

  $scope.sendMD = function() {
    console.log($scope.postmd);
  };

});
