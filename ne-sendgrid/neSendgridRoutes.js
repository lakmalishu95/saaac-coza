var express = require('express');
var neSendgrid = require('ne-sendgrid');

var router = express.Router();

var neSendgridContactFormRoute = function (server){

    router.post('/inbound', function(req, res, next){

        console.log(" ");
        console.log(" ");
        console.log("routes/contactForm req.body");
        console.log(req.body);
        console.log(" ");
        console.log(" ");

        var emailObject = {};

        emailObject.to = process.env.EMAIL;
        emailObject.subject = "Email from " + process.env.APPNAME;
        emailObject.from = req.body.from;

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

    server.use('/emails/sendgrid', router);

};

module.exports = neSendgridContactFormRoute;
