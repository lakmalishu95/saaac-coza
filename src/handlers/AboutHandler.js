var React = require('react');
var element = React.createElement;
var Header = require('../components/sections/Header');
var Footer = require('../components/sections/Footer');
var AccStrip = require('../components/sections/AccStrip');

var meta = {
    path: "/about",
    title: "About Us",
    heroImage: "/images/hero-home-back.jpg",
    description: "This is About Us page",
    css: ["/ne-style/ne-css/neStyleFontAwesome.css"],
    nerbArray: [
        {
            nerbName: 'aboutusvision',
            pathFunction: function (meta) {
                if (meta.params._id){
                    path = process.env.ROOTURL + "/data/aboutusvision" + "/" + meta.params._id +"?token="+ meta.token;
                }else {
                    var path = process.env.ROOTURL + "/data/aboutusvision"+"?token="+ meta.token;
                }
                return path
            }
        },
        {
            nerbName: 'aboutusmission',
            pathFunction: function (meta) {
                if (meta.params._id){
                    path = process.env.ROOTURL + "/data/aboutusmission" + "/" + meta.params._id +"?token="+ meta.token;
                }else {
                    var path = process.env.ROOTURL + "/data/aboutusmission"+"?token="+ meta.token;
                }
                return path
            }
        }
    ]
};

var handler = React.createClass({

    render: function() {
        var self = this;

        var vision;
        if (self.props.data.message){

            vision = self.props.data.message;

        }
        else if (self.props.data && self.props.data.aboutusvision) {

            var visionItems = self.props.data.aboutusvision.map((visionItem, index)=>{
                return element(
                    "div",{className: "about-vision-item", key: index},
                    element(
                        "p",{},
                        visionItem.visionItem
                    )
                )
            });

            vision = element(
                "div",{className: "about-vision-group"},
                element(
                    "h2",{},
                    "Our Vision"
                ),
                visionItems

            )
        }

        var mission ;
        if (self.props.data.message){

            mission = self.props.data.message;

        }
        else if (self.props.data && self.props.data.aboutusmission) {

            var missionItems = self.props.data.aboutusmission.map((missionItem, index)=>{
                return element(
                    "div",{className: "about-vision-item", key: index},
                    element(
                        "p",{},
                        missionItem.missionItem
                    )
                )
            });

            mission = element(
                "div",{className: "about-vision-group"},
                element(
                    "h2",{},
                    "Our Mission"
                ),
                missionItems

            )
        }

        return (
            <body>
                <Header {...self.props} />
                <AccStrip {...self.props} />
                {vision}
                {mission}
                <div className="pre-footer-space-about"></div>
                <Footer {...self.props} />
            </body>
        )
    }
});

exports.handler = handler;
exports.meta = meta;