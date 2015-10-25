var React = require('react');
var Header = require('../components/sections/Header');
var Footer = require('../components/sections/Footer');
var element = React.createElement;

var meta = {

    path: "/accreditations",
    title: "Accreditations",
    description: "SAAAC is accredited with various educational institutions and provide top quality education and recognised qualifications",
    nerbArray: [
        {
            nerbName: 'accreditations',
            pathFunction: function (meta) {
                if (meta.params._id){
                    path = process.env.ROOTURL + "/data/accreditations" + "/" + meta.params._id +"?token="+ meta.token;
                }else {
                    var path = process.env.ROOTURL + "/data/accreditations"+"?token="+ meta.token;
                }
                return path
            }
        }
    ]
};


var handler = React.createClass({

    render: function() {
        var self = this;


        var accreditationsList;
        if (self.props.data.message){

            accreditationsList = self.props.data.message;

        }
        else if (self.props.data && self.props.data.accreditations) {
            accreditationsList = self.props.data.accreditations.map((accreditation, index)=>{
                return element(
                    "div",{className: "dataListItem", key: index},
                    element(
                        "div",{className: "dataListItemInner"},
                        element(
                            "p",{},
                            accreditation.title
                        )
                    )
                )
            });
        }
        return (
            <body>
                <Header {...self.props} />
                <section className="ne-row-960">
                    {accreditationsList}
                </section>
                <Footer {...self.props} />
            </body>
        )
    }
});

exports.handler = handler;
exports.meta = meta;