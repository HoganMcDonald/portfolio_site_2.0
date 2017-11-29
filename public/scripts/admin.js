let app = angular.module('admin', ['ngSanitize']);

app.controller('adminController', function($sanitize, $scope, $html) {
  $scope.renderHTML = function() {
    $scope.posthtml = '';
  };
});
