const nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();


let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'xyz@gmail.com',
        pass: '*************'
    }
});

router.post('/sendMails', function (req, res) {
    let mailDetails = {
        from: 'xyz@gmail.com',
        to: req.body.sendList,
        subject: req.body.subject,
        text: req.body.text,
        html: req.body.html
    };

    mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
            console.log('Error Occurs');
            res.send(err);
        } else {
            console.log('Email sent successfully');
            res.send(data);
        }
    });
});

module.exports = router;




