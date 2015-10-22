var React = require('react');

class Header extends React.Component {

    render(){
        var self = this;

        var login;
        if (self.props.meta && self.props.meta.claims && self.props.meta.claims.user){
            var text = self.props.meta.claims.displayName;
            login =
                <ul>
                    <li><a href="/profile">{text}</a></li>
                </ul>
        }
        else {
            login =
                <ul>
                    <li><a href="/login">Login</a></li>
                </ul>
        }


        return (
            <header id="section-header">
                <div id="header-nav-topline">

                </div>
                <div className="ne-row" id="header-nav">
                    <div className="ne-row" id="header-nav-logo">

                        <a href="/"><img src="/images/header-nav-logo.png" alt="logo"></img></a>

                    </div>
                    <div className="ne-row" id="header-nav-links">
                        <ul>
                            <li className="ne-ccol-5s header-nav-links-link"><a href="/colleges">colleges</a></li>
                            <li className="ne-ccol-5s header-nav-links-link"><a href="/faculties">faculties</a></li>
                            <li className="ne-ccol-5s header-nav-links-link"><a href="/accreditations">accreditations</a></li>
                            <li className="ne-ccol-5s header-nav-links-link"><a href="/courses">courses</a></li>
                            <li className="ne-ccol-5s header-nav-links-link"><a href="/about">about us</a></li>
                        </ul>
                    </div>
                    <div className="ne-row" id="header-nav-contact">
                        <div id="header-nav-contact-link">
                            <a href="/contact">Contact us</a>
                        </div>
                    </div>

                </div>
                <div>
                    {login}
                </div>
            </header>
        )
    }
}

export default Header;