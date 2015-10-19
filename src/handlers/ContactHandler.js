var React = require('react');
var Header = require('../components/sections/Header');
var Footer = require('../components/sections/Footer');

var meta = {
    path: "/contact",
    title: "Contact Us",
    description: "This is Contact Us page"
};

var handler = React.createClass({

    render: function() {
        var self = this;
        return (
            <body>
                <Header {...self.props}/>
                <h2 id="main-title">This is the Contact Handler</h2>
                <p>{self.props.meta.title}</p>
                <Footer />
            </body>

        )
    }
});

exports.handler = handler;
exports.meta = meta;