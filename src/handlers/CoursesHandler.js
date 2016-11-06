var React = require('react');
var element = React.createElement;
var Header = require('../components/sections/Header');
var Footer = require('../components/sections/Footer');
var AccStrip = require('../components/sections/AccStrip');
var courses = require("../static/data/courses");

var meta = {
    path: "/courses",
    title: "Courses",
    description: "SAAAC offers a wide variety of accredited courses",
    css: ["/ne-style/ne-css/neStyleFontAwesome.css"],
};


var handler = React.createClass({

    render: function() {
        var self = this;

        var coursesList;
        if (self.props.data.message){
            coursesList = self.props.data.message;
        }
        else {
            coursesList = courses.map((course, index)=>{
                return element (
                    "div",{className: "courses-list-item", key: index},
                    element(
                        "h3", {className: "courses-list-item-title"},
                        course.title
                    ),
                    element(
                        "div", {className: "courses-list-item-field"},
                        element(
                            "i",{className: "fa fa-graduation-cap"}
                        ),
                        element(
                            "span",{className: "courses-list-item-field-title"},
                            "Faculty:"
                        ),
                        element(
                            "br",{}
                        ),
                        element(
                            "span",{},
                            course.faculty
                        )
                    ),
                    element(
                        "div", {className: "courses-list-item-field"},
                        element(
                            "i",{className: "fa fa-list"}
                        ),
                        element(
                            "span",{className: "courses-list-item-field-title"},
                            "Entry Requirements:"
                        ),
                        element(
                            "br",{}
                        ),
                        element(
                            "span",{},
                            course.entryRequirements
                        )
                    ),
                    element(
                        "div", {className: "courses-list-item-field"},
                        element(
                            "i",{className: "fa fa-calendar"}
                        ),
                        element(
                            "span",{className: "courses-list-item-field-title"},
                            "Course Duration:"
                        ),
                        element(
                            "br",{}
                        ),
                        element(
                            "span",{},
                            course.courseDuration
                        )
                    ),
                    element(
                        "div", {className: "courses-list-item-field"},
                        element(
                            "i",{className: "fa fa-thumbs-o-up"}
                        ),
                        element(
                            "span",{className: "courses-list-item-field-title"},
                            "What you will be able to do:"
                        ),
                        element(
                            "br",{}
                        ),
                        element(
                            "span",{},
                            course.ableToDo
                        )
                    ),
                    element(
                        "div", {className: "courses-list-item-field"},
                        element(
                            "i",{className: "fa fa-sitemap"}
                        ),
                        element(
                            "span",{className: "courses-list-item-field-title"},
                            "Learning Areas / Subjects:"
                        ),
                        element(
                            "br",{}
                        ),
                        element(
                            "span",{},
                            course.learningAreas
                        )
                    ),
                    element(
                        "div", {className: "courses-list-item-apply"},
                        element(
                            "a",{href:"/applications?course=" + course.title},
                            element(
                                "i",{className: "fa fa-hand-o-right"}
                            ),
                            element(
                                "span",{className: "courses-list-item-field-title"},
                                "Apply Online"
                            )
                        )
                    )


                )
            });
        }
        return (
            <body>
            <Header {...self.props} />
            <AccStrip {...self.props} />
            <section className="ne-row-960">
                {coursesList}
            </section>
            <Footer {...self.props} />
            </body>
        )
    }
});

exports.handler = handler;
exports.meta = meta;