var React = require('react');
var Header = require('../components/sections/Header');
var Footer = require('../components/sections/Footer');

var meta = {

    path: "/colleges",
    title: "Colleges",
    description: "Colleges at SAAAC",
    nerbArray: [
        {
            nerbName: 'colleges',
            pathFunction: function (meta) {
                if (meta.params._id){
                    path = process.env.ROOTURL + "/data/colleges" + "/" + meta.params._id +"?token="+ meta.token;
                }else {
                    var path = process.env.ROOTURL + "/data/colleges"+"?token="+ meta.token;
                }
                return path
            }
        }
    ]
};


var handler = React.createClass({

    render: function() {
        var self = this;


        var collegesList;
        if (self.props.data.message){

            collegesList = self.props.data.message;

        }
        else {
            collegesList = self.props.data.colleges.map((college, index)=>{
                return (
                    <p key={index}>
                        {college.title} <br/>
                    </p>
                )
            });
        }
        return (
            <body>
            <Header {...self.props} />
            {collegesList}
            <Footer {...self.props} />
            </body>
        )
    }
});

exports.handler = handler;
exports.meta = meta;