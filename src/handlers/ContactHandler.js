var React = require('react');
var element = React.createElement;
var Header = require('../components/sections/Header');
var Footer = require('../components/sections/Footer');
var AccStrip = require('../components/sections/AccStrip');

var meta = {
    path: "/contact",
    title: "Contact Us",
    heroImage: "/images/hero-home-back.jpg",
    description: "This is Contact Us page"
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
                    "a",{href: "/contact"},
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

        return (
            <body>
                <Header {...self.props}/>
                <AccStrip {...self.props} />
                {message}
                <Footer {...self.props} />
            </body>

        )
    }
});

exports.handler = handler;
exports.meta = meta;