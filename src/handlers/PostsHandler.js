var React = require('react');
var Header = require('../components/sections/Header');
var Footer = require('../components/sections/Footer');

var meta = {
    path: "/posts/:id",
    title: "About Us",
    description: "This is About Us page"
};

var handler = React.createClass({

    render: function() {
        var self = this;
        return (
            <body>
                <Header {...self.props} />
                <h2 id="main-title">This is the Posts Handler</h2>
                <p>id: {self.props.params.id}</p>
                <Footer />
            </body>
        )
    }
});

exports.handler = handler;
exports.meta = meta;