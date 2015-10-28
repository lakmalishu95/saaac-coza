var React = require('react');
var element = React.createElement;
var Header = require('../components/sections/Header');
var Footer = require('../components/sections/Footer');
var Accreditations = require('../components/sections/Accreditations');
var AccStrip = require('../components/sections/AccStrip');
var ProfCourseLink = require('../components/sections/ProfCourseLink');

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
                <div id="fb-root"></div>
                <script language="javascript" type="text/javascript" src="/js/facebook.js"></script>
                <Header {...self.props} />
                <AccStrip {...self.props} />
                <section className="home-section-main">
                    <div className="home-section-main-video">
                        <div className="home-section-main-video-inner">
                            <iframe width="100%" height="360px" src="https://www.youtube.com/embed/tYe0z4KZ3bs" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="home-section-main-facebook">
                        <div className="fb-page" data-href="https://www.facebook.com/saaac.co.za"
                             data-width="280" data-hide-cover="false" data-show-facepile="false"
                             data-show-posts="true">
                        </div>
                    </div>
                </section>
                <ProfCourseLink {...self.props} />
                <Accreditations {...self.props} />
                <Footer {...self.props} />
            </body>
        )
    }
});

exports.handler = handler;
exports.meta = meta;