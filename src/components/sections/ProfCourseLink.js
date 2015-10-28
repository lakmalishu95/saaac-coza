var React = require('react');

class section extends React.Component {

    render(){
        var self = this;

        return (
            <section id="section-profcourselink" className="ne-row">
                <a href="/courses"><img src="/images/profcourselink.png" alt="Link to courses"/></a>
            </section>
        )
    }
}

export default section;