var React = require('react');
var Header = require('../components/sections/Header');
var Footer = require('../components/sections/Footer');
var Accreditations = require('../components/sections/Accreditations');
var element = React.createElement;

var meta = {

    path: "/accreditations",
    title: "Accreditations",
    description: "SAAAC is accredited with various educational institutions and provide top quality education and recognised qualifications",
};

var accreditations = [
    { "title" : "Institute of Certified Bookkeepers (ICB)  ", "description" : "Accreditation No: QAP/585/003", "logoLink" : "/images/accreditations/icb.jpg" },
    { "title" : "Confederation of Tourism & Hospitality (CTH) ", "description" : "Accreditation No: 1043", "logoLink" : "/images/accreditations/cth.jpg" },
    { "title" : "TestOut ", "description" : "Authorised Educational Partner", "logoLink" : "/images/accreditations/testout.jpg" },
    { "title" : "Department of Higher Education and Training ", "description" : "Exam Centre Registration Number: 0899992811", "logoLink" : "/images/accreditations/dhet.jpg" },
    { "title" : "Chartered Institute of Tourism & Hospitality (ITHSA) ", "description" : "Accreditatition No: 1043", "logoLink" : "/images/accreditations/ith.jpg" },
    { "title" : "SACAI - Registered Matric Examination Centre", "description" : "No: A-1005-14 Umalisi Provisionally Accredited", "logoLink" : "/images/accreditations/sacai.jpg" }
];

var handler = React.createClass({

    render: function() {
        var self = this;

        var accreditationsList;

        accreditationsList = accreditations.map((accreditation, index)=>{
            return element(
                "div",{className: "dataListItem", key: index},
                element(
                    "div",{className: "dataListItemInner"},
                    element(
                        "img",{src: accreditation.logoLink, alt:accreditation.title + " logo"}
                    ),
                    element(
                        "h4",{},
                        accreditation.title
                    ),
                    element(
                        "p",{},
                        accreditation.description
                    )
                )
            )
        });

        return (
            <body>
                <Header {...self.props} />
                <section className="ne-row-960" id="accreditations-list">
                    {accreditationsList}
                </section>
                <Accreditations {...self.props} />
                <Footer {...self.props} />
            </body>
        )
    }
});

exports.handler = handler;
exports.meta = meta;