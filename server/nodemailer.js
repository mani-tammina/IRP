const nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();


let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'irp.tammina@gmail.com',
        pass: 'oupqtxhynvrivztm'
    }
});

router.post('/sendMails', function (req, res) {
    console.log(req.body);
    let str = '';
    req.body.forEach(ele => {
        str = str+','+ele
    })

    console.log('str',str);
    
    let mailDetails = {
        // from: 'irp.tammina@gmail.com',
        // to: 'moulika.cheekati@gmail.com',
        // subject: 'mail',
        // text: 'HI moulika',
        // html: 'hello'
        sendList: ['ramyasrivaranasi@gmail.com', 'utla.hemanth@gmail.com', 'moulika.cheekati@gmail.com','tharak37@gmail.com','tharak5959@gmail.com'],
        from: 'irp.tammina@gmail.com',
        to: str,
        subject: req.body.subject,
        text: req.body.text,
        html: req.body.html,
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




