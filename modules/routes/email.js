// requires
const router = require('express').Router(),
  bodyParser = require('body-parser'),
  nodemailer = require('nodemailer');

// nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD
  }
}); // end nodemailertransporter

router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json());

// Send email via nodemailer
function sendEmail(email, subject, message) {
  const mailOptions = {
    from: `"Your Website" <${process.env.EMAIL_USERNAME}>`,
    to: 'hogan.developer@gmail.com',
    subject: subject,
    html: message
  };
  // create promise for the mail action
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return reject(error);
      }
      return resolve(info);
    }); // end mail send
  }); // end promise
} // end sendEmail

router.post('/', (req, res)=> {
  console.log(req.body);
  if (req.body.email && req.body.name && req.body.message && req.body.subject) {
    // email body
    let message = `<ul><li>From: ${req.body.name}, <"${req.body.email}"></li><li>${req.body.message}</li></ul>`;

    // send mail
    sendEmail(req.body.email, req.body.subject, message)
      .then(success => {
        console.log(success);
        res.status(200).send({message:'success'});
      })
      .catch(error => {
        console.log(error);
        res.status(500).send({message:'something went wrong with gmail', error: error});
      }); // end send mail

  } else {
    res.status(400).send({message: 'missing information in the request'});
  }
});

module.exports = router;
