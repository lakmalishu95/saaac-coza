var React = require('react');
var Header = require('../components/sections/Header');
var Footer = require('../components/sections/Footer');

var meta = {
    path: "/express",
    title: "About Us",
    description: "This is About Us page"
};

var handler = React.createClass({

    /*
    constructor(props){
        super(props);
        this.state = {
            title: "Express",
            name: "Name from Express Handler State"
        }
    }
    */

    componentDidMount: function () {
        console.log('ExpressHandler Mounted');
    },

    render: function() {
        var self = this;
        return (
            <html id="react-mount">
                <body>
                    <Header {...self.props} />
                    <h2 id="main-title">This is the Express Handler</h2>
                    <Footer />
                </body>
            </html>
        )
    }
});

/*

handler.propTypes = {
    title: React.PropTypes.string,
    siteName: React.PropTypes.string
};

handler.defaultProps = {
    siteName: "Sitename"
};

*/

exports.handler = handler;
exports.meta = meta;