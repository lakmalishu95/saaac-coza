var React = require('react');
var Header = require('../components/sections/Header');
var Footer = require('../components/sections/Footer');

var meta = {
    path: "/notfound",
    title: "About Us",
    description: "This is About Us page"
};

var handler = React.createClass({

    render: function() {
        var self = this;
        return (
            <body>
                <Header {...self.props} />
                <h1 id="main-title">Route not Found </h1>
                <p>{self.props.meta.title}</p>
                <Footer />
            </body>
        )
    }
});

exports.handler = handler;
exports.meta = meta;