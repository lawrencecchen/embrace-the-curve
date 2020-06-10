const nodemailer = require('nodemailer');
const validator = require('email-validator');

const options = {
  port: 465,
  host: 'gator3071.hostgator.com',
  secure: true,
  auth: {
    user: 'info@embracethecurve.org',
    pass: 'N+%;I1[.3$0a',
  },
};
const transporter = nodemailer.createTransport(options);

module.exports = (req, res) => {
  transporter.verify(function (error, success) {
    if (error) {
      res.json({
        success: false,
        status: `Something happened on our servers...`,
      });
    } else {
      if (!req.body.values) {
        res.json({ success: false, message: 'Something went wrong.' });
        return;
      }
      const { senderName, email, message } = req.body.values;

      if (!validator.validate(email)) {
        res.json({ success: false, message: 'Please enter a valid email.' });
      } else if (!senderName || !message) {
        res.json({
          success: false,
          message: 'Please provide your name and a message',
        });
      } else {
        let messageOptions = {
          from: 'info@embracethecurve.org',
          to: 'angela.huang@embracethecurve.org',
          subject: `${senderName} contacted you using embracethecurve.org's contact form.`,
          text: `Sender's name: ${senderName} \n Sender's email: ${email} \n Message: ${message}`,
          replyTo: email,
        };

        transporter.sendMail(messageOptions, (err, info) => {
          if (err) {
            console.log(err);
          } else {
            console.log(info.messageId);
            res.json({
              success: true,
              message:
                'Thanks for your message. Expect a reply from us in a few days!',
            });
          }
        });

        res.json({ success: true, message: 'done' });
      }
    }
  });
};
