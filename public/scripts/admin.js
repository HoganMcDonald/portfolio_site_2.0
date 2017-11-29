let app = angular.module('admin', ['ngSanitize']);

app.controller('adminController', function($sanitize, $scope, $http) {

  $scope.renderHTML = function() {
    console.log('triggered');
    $scope.posthtml = $sanitize(marked($scope.postmd));
  };

});
