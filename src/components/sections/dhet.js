var React = require('react');

class section extends React.Component {

    render(){
        var self = this;

        return (
            <section className="section-dhet" >
                <h2>Registration <br></br> Department of Higher Education and Training </h2>
                <div className="dhetcontainer">
                    <div className="dhetcol">
                        <div>
                        <a target="_blank" href="/docs/SAAAC-DHET-Registration.pdf"><img src="/images/dhet-thumb.png" alt="SAAAC DHET Registration Document"/></a>
                        </div> 
                    </div> 
                    <div className="dhetcol">
                        <div>
                        <a target="_blank" href="/docs/SAAAC-DHET-Registration.pdf"><img src="/images/dhet-thumb2.png" alt="SAAAC DHET Registration Document"/></a>
                        </div> 
                    </div> 
                    <div className="dhetcol">
                        <div>
                        <a target="_blank" href="/docs/SAAAC-DHET-Registration.pdf"><img src="/images/dhet-thumb3.png" alt="SAAAC DHET Registration Document"/></a>
                        </div> 
                    </div> 
                </div> 
            </section>
        )
    }
}

export default section;