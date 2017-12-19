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
    {name: 'TCSW Hack For Change 2017',
    description: 'My partner and I placed 2nd in the 2017 Hack for Change Hackathon as part of Twin Cities Startup Week. Our app leveraged machine learning api as well as CDC data on mortality to predict a users exact date of death.',
    techUsed: ['Nexosis api', 'Node.js', 'Express.js', 'Google Analytics', 'Machine Learning'],
    dateRange: '2017'},

    {name: 'DeepLearning.ai',
    description: 'I completed a certification course on building deep learning networks. This involved building an image classifier, implimenting logistic regression, and leveraging Python libraries to handle large, unstructured data sets. I have been using this knowlege to build a web API that can be used to identify local mushrooms.',
    techUsed: ['Python', 'Numpy', 'Pycharm', 'Flask', 'TensorFlow'],
    dateRange: '2017'},

    {name: 'Prime Digital Academy',
    description: 'I chose to attend prime because I knew that I learned best in an immersive environment. Prime o ered the intense experience I knew represented the best entry point into the industry for me.',
    techUsed: ['MEAN Stack', 'SQL', 'SASS', 'JQuery', 'Heroku'],
    dateRange: '2017'},

    {name: '[words] Bookstore',
    description: 'I worked in collaboration with business owners to open a first-of-its- kind independent bookstore in the MSP airport.',
    techUsed: ['Adobe Illustrator', 'Adobe Photoshop', 'Netsuite'],
    dateRange: '2016 - 2017'},

    {name: 'Bloom Church',
    description: 'While at Bloom, I was ordained as a minister and would regularly deliver sermons to a group of 30 - 50 people. Other responsibilities included maintaining online content including church website, weekly newsletter, podcasts, and google ads.',
    techUsed: ['Adobe Illustrator', 'Adobe Photoshop', 'Squarespace', 'Google Ads', 'Google Analytics', 'MailChimp'],
    dateRange: '2015 - 2016'},

    {name: 'North Central University',
    description: 'My background is in pastoral ministry which involves formal education in organizational leadership, research, and communication. This background has taught me to be empithetic towards users in my design process as well as build software that provides value to people\'s lives',
    techUsed: ['Microsoft Office', 'Apple iWork', 'Google Drive'],
    dateRange: '2013 - 2015'}
  ]

  $scope.skills = [
    {name: 'Python',
    url: 'https://www.python.org/'},
    {name: 'JavaScript',
    url: 'https://www.javascript.com/'},
    {name: 'Java',
    url: 'https://java.com/en/'},
    {name: 'Deep Learning',
    url: 'https://www.coursera.org/account/accomplishments/certificate/32NQ4QDGGEFL'},
    {name: 'ES6/7',
    url: 'https://www.ecma-international.org/publications/standards/Ecma-262.htm'},
    {name: 'Node.js',
    url: 'https://nodejs.org/en/'},
    {name: 'P5.js',
    url: 'https://p5js.org/'},
    {name: 'AngularJS',
    url: 'https://angularjs.org/'},
    {name: 'TensorFlow',
    url: 'https://www.tensorflow.org/'}
  ]

  $scope.projects = [
    {name: 'Capture App',
    img: '/assets/capture.png',
    description: 'Capture is a mobile-first web application for public speakers. In my previous career as a pastor, I developed a system for writing sermons that involved seperating idea generation from the rest of the writing process. Capture is the digital implimentation of that concept. Capture was my first full stack application and through developing it I learned a lot about the importance of application architecture as well as authentication.',
    techUsed: ['Node.js', 'Express.js', 'PostgreSQL', 'Heroku', 'IBM Watson', 'Nodemailer']},

    {name: 'Praeco IIoT || Lab651',
    img: '/assets/praeco.png',
    description: 'An mobile-first web platform designed for industrial clients to set up real time notifications when conditions in their spaces change. I worked on this project as part of a team on behalf of Lab651.',
    techUsed: ['Particle.io web api', 'Node.js', 'Express.js', 'MongoDB', 'Heroku', 'Twilio SMS', 'Twilio Voice', 'Nodemailer']},

    {name: 'I Know When You\'re Going to Die',
    img: '/assets/die.png',
    description: 'I placed 2nd competing alongside a designer in the 2017 Hack for Change Hackathon as part of Twin Cities Startup Week. Our app leveraged the event’s sponsor’s (Nexosis) machine learning api as well as CDC data on mortality to predict a users exact date of death. The project required us to clean a dataset, upload that set to Nexosis using AWS, and train a regression model with 3 inputs and a single output feature.',
    techUsed: ['Nexosis api', 'Node.js', 'Express.js', 'Google Analytics', 'Machine Learning']},

    {name: 'Simple Workout',
    img: '/assets/simple-workout.png',
    description: 'I built this front end project to learn how to use object oriented features of ES6 in an Angular app. It’s an exercise web app that allows users to quickly put together a workout. I learned about scoping issues related to lexical binding in arrow functions, reccursive algorithm structures interacting with two-way binding, and utilizing CSS grid system to create a consistent UI.',
    techUsed: ['AngularJS', 'Node.js', 'Express.js', 'Object Oriented Design', 'Heroku', 'SASS']},

    {name: 'Personal Site',
    img: '/assets/this-desktop.png',
    description: 'This site was built to showcase my attention to detail, skill as a front end developer, and passion for modern design trends. I especially enjoyed the added challenge of keeping the entire site in a single page.',
    techUsed: ['HTML', 'SASS', 'YouTube iFrame API', 'Responsive Design', 'JavaScript', 'JQuery', 'Node.js', 'Express.js']}
  ]

}); // end main controller
