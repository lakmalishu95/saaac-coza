var React = require('react');
var element = React.createElement;
var neSendgrid = require('./src/ne-sendgrid');

var strr = Math.random().toString().substring(3,8);
console.log(strr);

var mail = neSendgrid.sendText({
    to: "bernard@yebolocal.com",
    from: "bernard@yebolocal.com",
    subject: "This is the subject 2",
    body: "This is the body 2"
});

//console.log(mail);

/*
var qq2 = element(
    "div", {className: "something"},
    element(
        "div", {className: "something"},
        element(
            "h2", {},
            "String"
        ),
        element(
            "p", {},
            "String"
        ),
        element(
            "p", {},
            "String"
        )
    ),
    element(
        "div", {className: "something"},
        element(
            "h2", {},
            "String"
        ),
        element(
            "p", {},
            "String"
        )
    )
);
console.log(qq2);
*/

