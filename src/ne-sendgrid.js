var sendgrid  = require('sendgrid')(process.env.SENDGRID_APIKEY);

var neSendgrid = {

    sendText: function(email){

        var self = this;

        sendgrid.send({
            to:       email.to,
            from:     process.env.EMAIL,
            subject:  email.subject,
            text:     email.text
        },function(err, status) {
            if (err) {
                var error = err;
                console.log(error);
                var status = {};
                status.message = error;
                status.date = new Date();
                email.status = status;
                self.saveEmail(email);
                return email
            }
            else {
                console.log(status);
                status.date = new Date();
                email.status = status;
                self.saveEmail(email);
                return email
            }

        });

    },
    sendHtml: function(email){

        var self = this;

        sendgrid.send({
            to:       email.to,
            from:     process.env.EMAIL,
            subject:  email.subject,
            html:     email.html
        },function(err, status) {
            if (err) {
                var error = err;
                console.log(error);
                var status = {};
                status.message = error;
                status.date = new Date();
                email.status = status;
                self.saveEmail(email);
                return
            }
            else {
                console.log(status);
                status.date = new Date();
                email.status = status;
                self.saveEmail(email);
            }

        });

    },
    saveEmail: function(email){

        console.log('saving');
        console.log(email);
        console.log('saved');
    }

};

module.exports = neSendgrid;
