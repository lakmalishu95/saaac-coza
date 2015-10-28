var React = require('react');

class section extends React.Component {

    render(){
        var self = this;

        return (
            <section id="section-accreditations" className="ne-row">
                <img src="/images/accreditations.jpg" alt="Accreditations"/>
            </section>
        )
    }
}

export default section;