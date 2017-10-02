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

  // places I have worked. array of objects.
  $scope.experience = [
    {name: 'DeepLearning.ai',
    description: 'I completed a certification course on building deep learning networks. This involved building an image classifier, implimenting logistic regression, and leveraging Python libraries to handle large, unstructured data sets. I have been using this knowlege to build a web API that can be used to identify local mushrooms.',
    techUsed: ['Python', 'Numpy', 'Pycharm', 'Flask', 'TensorFlow']},
    {name: 'Prime Digital Academy',
    description: 'I chose to attend prime because I knew that I learned best in an immersive environment. Prime o ered the intense experience I knew represented the best entry point into the industry for me.',
    techUsed: ['MEAN Stack', 'SQL', 'SASS', 'JQuery', 'Heroku']},
    {name: '[words] Bookstore',
    description: 'I worked in collaboration with business owners to open a first-of-its- kind independent bookstore in the MSP airport.',
    techUsed: ['Adobe Illustrator', 'Adobe Photoshop', 'Netsuite']},
    {name: 'Bloom Church',
    description: 'While at Bloom, I was ordained as a minister and would regularly deliver sermons to a group of 30 - 50 people. Other responsibilities included maintaining online content including church website, weekly newsletter, podcasts, and google ads.',
    techUsed: ['Adobe Illustrator', 'Adobe Photoshop', 'Squarespace', 'Google Ads', 'Google Analytics', 'MailChimp']},
    {name: 'North Central University',
    description: 'My background is in pastoral ministry which involves formal education in organizational leadership, research, and communication. This background has taught me to be empithetic towards users in my design process as well as build software that provides value to people\'s lives',
    techUsed: ['Microsoft Office', 'Apple iWork', 'Google Drive']}
  ]

}); // end main controller
