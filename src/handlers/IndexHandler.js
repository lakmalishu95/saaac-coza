var React = require('react');
var Header = require('../components/sections/Header');
var Footer = require('../components/sections/Footer');
var Accreditations = require('../components/sections/Accreditations');
var AccStrip = require('../components/sections/AccStrip');
var ProfCourseLink = require('../components/sections/ProfCourseLink');

var meta = {
    path: "/",
    title: "SAAAC - SA Academy of Applied Competence",
    description: "Colleges in Pretoria, Queenstown, Durban and East London"
};

var handler = React.createClass({

    render: function() {
        var self = this;

        return (
            <body>
                <Header {...self.props} />
                <AccStrip {...self.props} />
                <ProfCourseLink {...self.props} />
                <Accreditations {...self.props} />
                <Footer {...self.props} />
            </body>
        )
    }
});

exports.handler = handler;
exports.meta = meta;