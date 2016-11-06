var React = require('react');
var neHandler = require('ne-handler');
var element = React.createElement;
var Header = require('../components/sections/Header');
var Footer = require('../components/sections/Footer');
var AccStrip = require('../components/sections/AccStrip');
var enrolmentFields = require("../static/data/enrolmentFields");

var _ = require("lodash");

var meta = {
    path: "/applications",
    title: "Applications",
    heroImage: "/images/hero-home-back.jpg",
    description: "This is applications page"
};

/*

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

*/

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

        var applicationForCurrentUser = element(

            "form",

            {action: "/emails/custom/enrolments", method: "post"},

            enrolmentFields.map(function(field, i) {

                if (field.type === "Dropdown"){

                    var dropdownOptions = [];
                    if (field.dropdownOption1 !== ""){
                        dropdownOptions.push(field.dropdownOption1);
                    }
                    if (field.dropdownOption2 !== ""){
                        dropdownOptions.push(field.dropdownOption2);
                    }
                    if (field.dropdownOption3 !== ""){
                        dropdownOptions.push(field.dropdownOption3);
                    }
                    if (field.dropdownOption4 !== ""){
                        dropdownOptions.push(field.dropdownOption4);
                    }
                    if (field.dropdownOption5 !== ""){
                        dropdownOptions.push(field.dropdownOption5);
                    }
                    if (field.dropdownOption6 !== ""){
                        dropdownOptions.push(field.dropdownOption6);
                    }
                    if (field.dropdownOption7 !== ""){
                        dropdownOptions.push(field.dropdownOption7);
                    }
                    if (field.dropdownOption8 !== ""){
                        dropdownOptions.push(field.dropdownOption8);
                    }
                    if (field.dropdownOption9 !== ""){
                        dropdownOptions.push(field.dropdownOption9);
                    }
                    if (field.dropdownOption10 !== ""){
                        dropdownOptions.push(field.dropdownOption10);
                    }

                    return element (
                        "div",
                        {key: i, className: "application-container"},
                        element(
                            "label",{className: "application-label"},
                            field.name
                        ),
                        element(
                            "br",{}
                        ),
                        element(
                            "select", {name: field.name},
                            dropdownOptions.map(function(dropdownOption, i2) {
                                return element(
                                    "option", {value: dropdownOption, key: i2, className: "application-input-select"},
                                    dropdownOption
                                )
                            })
                        ),
                        element(
                            "br",{}
                        )
                    )
                }
                else {
                    return element (
                        "div",
                        {key: i, className: "application-container"},
                        element(
                            "label",{className: "application-label"},
                            field.name
                        ),
                        element(
                            "br",{}
                        ),
                        element(
                            "input",{type: "text", name: field.name, className: "input-text-fill application-input"}
                        ),
                        element(
                            "br",{}
                        )
                    )
                }

            }),

            element(
                "input", {type: "submit" , value: "Send", className: "application-save-btn"}
            )

        );


        /*
        var dd = self.props.data.nedb1.func();

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