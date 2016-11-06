var express = require('express');
var neSendgrid = require('ne-sendgrid');

var router = express.Router();

var customEmailRoutes = function (server){

    router.post('/enrolments', function(req, res, next) {

        console.log(" ");
        console.log(" ");
        console.log("routes/contactForm req.body");
        console.log(req.body);
        console.log(" ");
        console.log(" ");

        var emailObject = {};

        emailObject.to = process.env.EMAIL;
        emailObject.from = process.env.EMAIL;
        emailObject.subject = "Email from " + process.env.APPNAME;

        // FORMAT EMAIL BODY - START
        emailObject.body = emailObject.body + "<h1> Application to study </h1>" + req.body["Course"] + "<br>" + req.body["College"];

        emailObject.body = emailObject.body + "<h2> Student Basic Information </h2>";
        emailObject.body = emailObject.body + "<table style='border: 1px solid black'>";
            emailObject.body = emailObject.body + "<tr>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + "Student Title" + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + "Student First Name" + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + "Student Surname" + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + "Student Sex" + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + "Student Race" + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + "Student Nationality" + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + "If no, what nationality are you" + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + "Date of Birth" + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + "Student ID or Pasport Number" + "</th>";
            emailObject.body = emailObject.body + "</tr>";
            emailObject.body = emailObject.body + "<tr>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + req.body["Student Title"] + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + req.body["Student First Name"] + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + req.body["Student Surname"] + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + req.body["Student Sex"] + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + req.body["Student Race"] + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + req.body["Student Nationality"] + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + req.body["If no, what nationality are you"] + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + req.body["Date of Birth"] + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + req.body["Student ID or Pasport Number"] + "</th>";
            emailObject.body = emailObject.body + "</tr>";
        emailObject.body = emailObject.body + "</table>";

        emailObject.body = emailObject.body + "<h2> Student Contact Information </h2>";
        emailObject.body = emailObject.body + "<table style='border: 1px solid black'>";
            emailObject.body = emailObject.body + "<tr>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + "Student Phone Number" + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + "Alternative Contact Number" + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + "Student Email" + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + "Student Residential Address" + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + "Student postal Address" + "</th>";
            emailObject.body = emailObject.body + "</tr>";
            emailObject.body = emailObject.body + "<tr>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + req.body["Student Phone Number"] + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + req.body["Alternative Contact Number"] + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + req.body["Student Email"] + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + req.body["Student Residential Address"] + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + req.body["Student postal Address"] + "</th>";
            emailObject.body = emailObject.body + "</tr>";
        emailObject.body = emailObject.body + "</table>";
        emailObject.body = emailObject.body + "<h2> Student Educational Background</h2>";
        emailObject.body = emailObject.body + "<table style='border: 1px solid black'>";
            emailObject.body = emailObject.body + "<tr>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + "Highest Qualification e.g. Matric" + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + "If no, what grade have you passed" + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + "Matric Maths and Science - Engineering" + "</th>";
            emailObject.body = emailObject.body + "</tr>";
            emailObject.body = emailObject.body + "<tr>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + req.body["Highest Qualification e.g. Matric"] + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + req.body["If no, what grade have you passed"] + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + req.body["Matric Maths and Science - Engineering"] + "</th>";
            emailObject.body = emailObject.body + "</tr>";
        emailObject.body = emailObject.body + "</table>";

        emailObject.body = emailObject.body + "<h2> Parent Information</h2>";
        emailObject.body = emailObject.body + "<table style='border: 1px solid black'>";
            emailObject.body = emailObject.body + "<tr>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + "Parent Title" + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + "Parent First Name" + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + "Parent Surname" + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + "Parent ID or Pasport Number" + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + "Parent Phone Number" + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + "Parent Email" + "</th>";
            emailObject.body = emailObject.body + "</tr>";
            emailObject.body = emailObject.body + "<tr>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + req.body["Parent Title"] + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + req.body["Parent First Name"] + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + req.body["Parent Surname"] + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + req.body["Parent ID or Pasport Number"] + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + req.body["Parent Phone Number"] + "</th>";
                emailObject.body = emailObject.body + "<th style='border: 1px solid black'>" + req.body["Parent Email"] + "</th>";
            emailObject.body = emailObject.body + "</tr>";
        emailObject.body = emailObject.body + "</table>";
        //FORMAT EMAIL BODY - END

        console.log("emailObject before call to neSendgrid");
        console.log(emailObject);

        neSendgrid.sendHTML(emailObject, res);
    });

    router.post('/inbound', function(req, res, next){

        console.log(" ");
        console.log(" ");
        console.log("routes/contactForm req.body");
        console.log(req.body);
        console.log(" ");
        console.log(" ");

        var emailObject = {};

        emailObject.to = process.env.EMAIL;
        emailObject.from = process.env.EMAIL;
        emailObject.subject = "Email from " + process.env.APPNAME;

        Object.getOwnPropertyNames(req.body).forEach(function (item, index, array) {

            console.log('neSendgrid Routes: item');
            console.log(item);
            emailObject.body = emailObject.body + " " + req.body[item];

            /*
             if (item == "from"){
             console.log('neSendgrid Routes: set from');
             console.log(item);
             emailObject[item] = req.body[item];
             console.log(emailObject);
             }
             else if (item == "content"){
             console.log('neSendgrid Routes: set content');
             console.log(item);
             emailObject.content.content = req.body[item];
             console.log(emailObject);
             }
             else if (item == "phone"){
             emailObject.content.phone = req.body[item];
             console.log(emailObject);
             }
             else if (item == "name"){
             emailObject.content.name = req.body[item];
             console.log(emailObject);
             }
             else{
             console.log("neSendgrid Routes Inbound: Skipped " + item + " on purpose becuase its not part of sendgrid email schema")
             }
             */
        });

        console.log("emailObject before call to neSendgrid");
        console.log(emailObject);

        neSendgrid.sendText(emailObject, res);

        // res.redirect('/');

        /*
         neSendgrid.sendText({
         to: "name@mail.com",
         from: "name@mail.com",
         subject: "This is the subject 2",
         body: "This is the body 2"s
         });

         to:{type: String},
         from:{type: String},
         subject:{type: String},
         body:{type: String},
         */

    });

    server.use('/emails/custom', router);

};

module.exports = customEmailRoutes;
