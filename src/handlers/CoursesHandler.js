var React = require('react');
var Header = require('../components/sections/Header');
var Footer = require('../components/sections/Footer');

var meta = {

    path: "/courses",
    title: "Courses",
    description: "SAAAC offers a wide variety of accredited courses",
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
        var self = this;

        var coursesList;
        if (self.props.data.message){

            coursesList = self.props.data.message;

        }
        else {
            coursesList = self.props.data.courses.map((course, index)=>{
                return (
                    <p key={index}>
                        {course.title} <br/>
                    </p>
                )
            });
        }
        return (
            <body>
            <Header {...self.props} />
            {coursesList}
            <Footer {...self.props} />
            </body>
        )
    }
});

exports.handler = handler;
exports.meta = meta;