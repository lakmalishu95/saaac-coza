var React = require('react');
var element = React.createElement;
var Header = require('../components/sections/Header');
var Footer = require('../components/sections/Footer');
var AccStrip = require('../components/sections/AccStrip');

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
                return element(
                    "div",{key: index, className:"ne-ccol-2m colleges-list-item"},
                    element(
                        "div",{className: "colleges-list-item-inner"},
                        element(
                            "h4",{},
                            college.title
                        ),
                        element(
                            "p",{},
                            college.phone
                        ),
                        element(
                            "p",{},
                            college.email
                        ),
                        element(
                            "p",{},
                            college.address
                        )
                    )
                )


            });
        }
        return (
            <body>
            <Header {...self.props} />
            <AccStrip {...self.props} />
            <div className="ne-row-960">
                {collegesList}
            </div>
            <Footer {...self.props} />
            </body>
        )
    }
});

exports.handler = handler;
exports.meta = meta;