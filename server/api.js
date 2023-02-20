var mongoose = require('mongoose');
var express = require('express');
const usersSchema = require('./usersSchema');
const jobPostSchema = require('./jobPostSchema');
const applicationSchema = require('./applicationSchema');
var router = express.Router();
// var StudentModel = require('./studentschema');

// Connecting to database
// var qry = 'mongodb+srv://mani:mani@cluster0.xiv7jmq.mongodb.net/test'
var query = 'mongodb+srv://mani:mani@cluster0.xiv7jmq.mongodb.net/test'

const db = (query);
mongoose.Promise = global.Promise;
mongoose.set('strictQuery', true);
mongoose.connect(db, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}, function (error) {
    if (error) {
        console.log("Error!" + error);
    }
});


//User API starts here
router.get('/saveUser', function (req, res) {
    var newUser = new usersSchema(req.body);

    newUser.save(function (err, data) {
        if (err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});

router.get('/findallUsers', function (req, res) {
    usersSchema.find(function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(data);
        }
    });
});

router.post('/updateUser', function (req, res) {
    usersSchema.findByIdAndUpdate(req.body.id,
        { Name: req.body.Name }, function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
                console.log("Data updated!");
            }
        });
});

router.post('/deleteUser', function (req, res) {
    usersSchema.findByIdAndDelete((req.body.id),
        function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
                console.log("Data Deleted!");
            }
        });
});
//User APIs ended here

//Job APIs started here
router.get('/saveJob', function (req, res) {
    var newJob = new jobPostSchema(req.body);

    newJob.save(function (err, data) {
        if (err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});

router.get('/findallJobs', function (req, res) {
    jobPostSchema.find(function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(data);
        }
    });
});

router.post('/updateJob', function (req, res) {
    jobPostSchema.findByIdAndUpdate(req.body.id,
        { Name: req.body.Name }, function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
                console.log("Data updated!");
            }
        });
});

router.post('/deleteJob', function (req, res) {
    jobPostSchema.findByIdAndDelete((req.body.id),
        function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
                console.log("Data Deleted!");
            }
        });
});
//Job APIs ended here

//Application APIs started here 
router.get('/saveApplication', function (req, res) {
    var newApplication = new applicationSchema(req.body);

    newApplication.save(function (err, data) {
        if (err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});

router.get('/findallApplications', function (req, res) {
    applicationSchema.find(function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(data);
        }
    });
});

router.post('/updateApplication', function (req, res) {
    applicationSchema.findByIdAndUpdate(req.body.id,
        { Name: req.body.Name }, function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
                console.log("Data updated!");
            }
        });
});

router.post('/deleteApplication', function (req, res) {
    applicationSchema.findByIdAndDelete((req.body.id),
        function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
                console.log("Data Deleted!");
            }
        });
});
//Application APIs ended here 


module.exports = router;