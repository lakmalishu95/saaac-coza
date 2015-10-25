var React = require('react');
var Header = require('../components/sections/Header');
var Footer = require('../components/sections/Footer');

var meta = {
    path: "/about",
    title: "About Us",
    heroImage: "/images/hero-home-back.jpg",
    description: "This is About Us page"
};

var handler = React.createClass({

    render: function() {
        var self = this;
        return (
            <body>
                <Header {...self.props} />
                <Footer {...self.props} />
            </body>
        )
    }
});

exports.handler = handler;
exports.meta = meta;