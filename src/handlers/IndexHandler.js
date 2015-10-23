var React = require('react');
var Header = require('../components/sections/Header');
var Footer = require('../components/sections/Footer');

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
                <h1 id="main-title">This is the IndexHandler</h1>
                <h2>{self.props.meta.title}</h2>
                <Footer {...self.props} />
            </body>
        )
    }
});

exports.handler = handler;
exports.meta = meta;