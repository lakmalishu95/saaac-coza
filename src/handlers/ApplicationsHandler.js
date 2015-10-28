var React = require('react');
var neHandler = require('ne-handler');
var element = React.createElement;
var Header = require('../components/sections/Header');
var Footer = require('../components/sections/Footer');
var AccStrip = require('../components/sections/AccStrip');

var _ = require("lodash");

var meta = {
    path: "/applications",
    title: "Applications",
    heroImage: "/images/hero-home-back.jpg",
    description: "This is applications page",
    nerbArray: [
        {
            nerbName: 'application',
            pathFunction: function (meta) {
                var path;
                if(meta && meta.token){
                    path = process.env.ROOTURL + "/data-alt/applications/get" + "?token=" + meta.token;
                }
                else{
                    path = process.env.ROOTURL + "/data/courses?token=undefined";
                }
                return path
            }
        }
    ]
};

var formField = function({label, dataName, data}){

    return element(
        "div",{},
            element(
                'label', {},
                label
            ),
            element(
                'br', {}
            ),
            element(
                "input", {type: "text", name: dataName, defaultValue: data}
            ),
            element(
                'br', {}
            )
    )
};

var handler = React.createClass({

    render: function() {
        var self = this;

        ///////////
        var message;
        if(self.props.meta.query && self.props.meta.query.message){
            message = element(
                "div",{className: "info-message ne-row"},
                element(
                    "a",{ href: "/applications"},
                    self.props.meta.query.message
                )
            )
        }
        else{
            message = element(
                "div",{}
            )
        }
        ///////////

        var applicationForCurrentUser;
        if (self.props.data && self.props.data.application && self.props.data.application[0] && self.props.data.application[0].enrolment){

            if(self.props.data.application[0].enrolment.referenceNumber === self.props.meta.claims.user){
                var objectForFields = self.props.data.application[0];
                if(self.props.meta && self.props.meta.query && self.props.meta.query.course){
                    objectForFields.enrolment.course = self.props.meta.query.course
                }
                var dataRef = self.props.dataRef;
                var enrolmentStatus;
                if(self.props.data.application[0].enrolment && self.props.data.application[0].enrolment.status && self.props.data.application[0].enrolment.status === "completed"){
                    enrolmentStatus = true
                }
                else{
                    enrolmentStatus = false
                }

                applicationForCurrentUser = element(
                    "form", {action: "/data-alt/applications/edit", method: "post"},
                    neHandler.buildFormFields ("applications", objectForFields, dataRef, {noEdit: enrolmentStatus}),
                    element(
                        "input", {type: "submit" , value: "Save", className: "application-save-btn"}
                    )
                );

            }
            else{

                applicationForCurrentUser = element(
                    "form", {action: "/login", method: "get"},
                    element(
                        'label', {},
                        "You need to login before you can apply online"
                    ),
                    element(
                        'br', {}
                    ),
                    element(
                        "button", {type: "submit" , className: "application-save-btn" },
                        "Go to Login Page"
                    )
                );

            }


        }

        else if (self.props.meta && self.props.meta.claims && self.props.meta.claims.user) {

            applicationForCurrentUser = element(
                "form", {action: "/data-alt/applications/add", method: "post"},
                element(
                    'label', {},
                    "Cell Phone Number" + " -> "
                ),
                element(
                    'br', {}
                ),
                element(
                    "input",
                    {type: "text", name: "student.phone.cell", placeholder: "0831234234"}
                ),
                element(
                    'br', {}
                ),
                element(
                    "button", {type: "submit" , className: "application-save-btn" },
                    "Start Application"
                )
            );

        }

        else {

            applicationForCurrentUser = element(
                "form", {action: "/login", method: "get"},
                element(
                    'label', {},
                    "You need to login before you can apply online"
                ),
                element(
                    'br', {}
                ),
                element(
                    "button", {type: "submit" , className: "application-save-btn" },
                    "Go to Login Page"
                )
            );

        }





        /* var dd = self.props.data.nedb1.func();

        var peopleList;
        if (self.props.data.message){

            peopleList = self.props.data.message;

        }
        else {
            peopleList = self.props.data.people.map((person, index)=>{
                return (
                    <p key={index}>
                        {person.nameFirst} <br/>
                    </p>
                )
            });
        }
       */

        return (
            <body>
                <Header {...self.props} />
                <AccStrip {...self.props} />
                {message}
                <section className="ne-row-960 applications-section">
                    {applicationForCurrentUser}
                </section>

                <Footer {...self.props} />
            </body>
        )
    }
});

exports.handler = handler;
exports.meta = meta;


/*





 */