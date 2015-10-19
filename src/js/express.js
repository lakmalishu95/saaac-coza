var express = require('express');
var router = express.Router();

var neSendgrid = require('../ne-sendgrid');

router.get('/', function(req, res) {

    console.log('req.cookies before');
    console.log(req.cookies);
    console.log(req.session);

    var email = {
        to:       'bernard@yebolocal.com',
        subject:  'Test Sendgrid',
        html:     '<h1>Heading</h1><p>This is a paragraph</p>'
    };

    neSendgrid.sendHtml(email);

    res.send(email);

});

module.exports = router;
