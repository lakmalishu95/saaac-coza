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
    css: ["/ne-style/ne-css/neStyleFontAwesome.css"]
};

var aboutusmission = [
    { "missionItem" : "* Provide quality education to our target market\r\n* Provide a variety of of faculties with a broad choice, making us the first choice to students\r\n* Affordable products of a high quality\r\n* Enhance the levels of study to ensure the student stays with us\r\n* Stay ahead with modern technology\r\n* Entice students to buy into the brand, thus enhancing the bottom line felling part of the company\r\n* Become aware of our opposition and continuously refine our approach by:\r\n- Measuring our performance against key indicators\r\n- Analysing the feedback from our customers and other interested parties\r\n- Responding promptly to internal and external influences that may affect our business"},
    { "missionItem" : "* Our services standards are designed to exceed expectations through our investment in:\r\n- Staff - who put customers first and delight them with our responsiveness\r\n- Systems - that are easy to use, designed for and with our customers\r\n- Innovation - exploring ways to develop and improve our products and service levels\r\n- Variety - offer a wide range of products, both local and internationally acceptable.\r\n* To be committed to providing expert advice, guidance and support to all our students\r\n* To become recognisable to our customers\r\n* Project professionalism to our customers in everything we do\r\n* Become a profit centre\r\n* Become the benchmark education provider in South Africa\r\n* Be driven by strong leadership who rewards excellence\r\n* Promote life-long learning"}
];

var aboutusvision = [
    { "visionItem" : "- To develop our educational facilities into places of constructive learning, making them recognizable through branding and quality product offering.\r\n" },
    { "visionItem" : "- Ensuring we equip our students with the necessary tools, to give them the competitive edge when entering the job market" },
    { "visionItem" : "- Through our affordable pricing structures, ensure that historically disadvantaged students, are offered the opportunity to take part in the wider context of the national transformation agenda, by furthering their education" },
    { "visionItem" : "- To establish ourselves as the employer of choice"},
    { "visionItem" : "- To establish ourselves as the educator of choice"}
];






var handler = React.createClass({

    render: function() {
        var self = this;

        var vision;

        var visionItems = aboutusvision.map((visionItem, index)=>{
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

        );

        var mission ;

        var missionItems = aboutusmission.map((missionItem, index)=>{
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

        );

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