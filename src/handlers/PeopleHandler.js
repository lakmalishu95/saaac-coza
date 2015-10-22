var React = require('react');
var Header = require('../components/sections/Header');
var Footer = require('../components/sections/Footer');

var meta = {

    path: "/people",
    title: "People",
    description: "This is People page",
    css: ["/test.css"],
    nerbArray: [
        {
            nerbName: 'people',
            pathFunction: function (meta) {
                if (meta.params._id){
                    path = process.env.ROOTURL + "/data/people" + "/" + meta.params._id +"?token="+ meta.token;
                }else {
                    var path = process.env.ROOTURL + "/data/people"+"?token="+ meta.token;
                }
                return path
            }
        }
    ]
};


var handler = React.createClass({

    render: function() {
        var self = this;

        // var dd = self.props.data.nedb1.func();

        var peopleList;
        if (self.props.data.message){

            peopleList = self.props.data.message;

        }
        else {
            peopleList = self.props.data.people.map((person, index)=>{
                return (
                    <p key={index}>
                        {person.nameFirst} <br/>
                    </p>
                )
            });
        }
        return (
            <body>
                <Header {...self.props} />
                <h2 id="main-title">This is the People Handler</h2>
                {peopleList}
                <Footer />
            </body>
        )
    }
});

exports.handler = handler;
exports.meta = meta;