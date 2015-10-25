var React = require('react');
var Header = require('../components/sections/Header');
var Footer = require('../components/sections/Footer');

var meta = {

    path: "/faculties",
    title: "Faculties",
    description: "Faculties as SAAAC",
    nerbArray: [
        {
            nerbName: 'courses',
            pathFunction: function (meta) {
                if (meta.params._id){
                    path = process.env.ROOTURL + "/data/courses" + "/" + meta.params._id +"?token="+ meta.token;
                }else {
                    var path = process.env.ROOTURL + "/data/courses"+"?token="+ meta.token;
                }
                return path
            }
        }
    ]
};


var handler = React.createClass({

    render: function() {
        return (
            <body>
            <Header {...self.props} />
            <p>ddd</p>
            <Footer {...self.props} />
            </body>
        )
    }
});

exports.handler = handler;
exports.meta = meta;