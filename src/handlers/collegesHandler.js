var React = require('react');
var element = React.createElement;
var Header = require('../components/sections/Header');
var Footer = require('../components/sections/Footer');
var AccStrip = require('../components/sections/AccStrip');

var meta = {

    path: "/colleges",
    title: "Colleges",
    description: "Colleges at SAAAC",
};

var colleges = [

    {
      "title" : "SAAAC Prestige College Campus - Hammanskraal",
      "phone" : "Tel: 012 516 0000",
      "email" : "Email: prestigecollege@saaac.co.za",
      "address" : "1 Eike Road, Off Old Warmbaths Road, Hammanskraal"
    },
    {
      "title" : "SAAAC East Rand - Brakpan",
      "phone" : "Tel: 078 480 3311",
      "email" : "Email: eastrand@saaac.co.za",
      "address" : "55 van der Walt Street, Dalview, Brakpan"
    },
    {
      "title" : "SAAAC Durban",
      "phone" : "Tel: 031 822 2936",
      "email" : "Email: principaldbn@saaac.co.za",
      "address" : "SAAAC Durban: Suites 303/304 Tower B, Salisbury Centre, Dr Pixley KaSeme Street (West), Durban "
    },
    {
      "title" : "SAAAC East London",
      "phone" : "Tel: 043 748 2225",
      "email" : "Email academyels@saaac.co.za",
      "address" : "9 Kelvin Place, Beacon Bay, East London"
    },
    {
      "title" : "SAAAC Queenstown",
      "phone" : "Tel: 045 838 6082",
      "email" : "Email: academyqtn@saaac.co.za",
      "address" : "SAAAC Queenstown: Robinson Road, Opposite Department of Labour, Queenstown"
    },
    {
      "title" : "SAAAC Sterkstroom",
      "phone" : "Cell: 082 566 5375",
      "email" : "Email: academyqtn@saaac.co.za",
      "address" : "Main Street, Opposite Library, Sterkstroom"
    }

];


var handler = React.createClass({

    render: function() {
        var self = this;

        var collegesList;

        collegesList = colleges.map((college, index)=>{
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
