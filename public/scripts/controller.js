let app = angular.module('myApp', []);

app.controller('mainController', function($scope, $http) {

  //clear input fields
  $scope.clearFields = ()=> {
    // clears input fields on success
    $scope.email = undefined;
    $scope.name = undefined;
    $scope.subject = undefined;
    $scope.message = undefined;
  };

  // sends an email when submit is clicked
  $scope.sendEmail = ()=> {
    // validate form. Requires @ in email field
    if($scope.email === undefined || $scope.name === undefined || $scope.subject === undefined || $scope.message === undefined) {
      console.log('nope');
    } else {
      // create email package to send to server
      emailObj = {
        email: $scope.email,
        name: $scope.name,
        subject: $scope.subject,
        message: $scope.message
      };
      console.log(emailObj);
      // post to /email
      $http.post('/email', emailObj)
        .then(res => $scope.clearFields())
        .catch(err => console.log(err));
    } // end validate form
  }; // end sendEmail
}); // end main controller
