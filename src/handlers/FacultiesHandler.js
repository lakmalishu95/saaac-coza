var React = require('react');
var Header = require('../components/sections/Header');
var Footer = require('../components/sections/Footer');
var AccStrip = require('../components/sections/AccStrip');

var meta = {

    path: "/faculties",
    title: "Faculties",
    description: "Faculties as SAAAC",
};


var handler = React.createClass({

    render: function() {
        var self = this;
        return (
            <body>
            <Header {...self.props} />
            <AccStrip {...self.props} />
            <p>ddd</p>
            <Footer {...self.props} />
            </body>
        )
    }
});

exports.handler = handler;
exports.meta = meta;