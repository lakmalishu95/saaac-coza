var React = require('react');

class Header extends React.Component {

    render(){
        var self = this;

        var heroImage = self.props.meta.heroImage || "/images/hero-home-back.jpg";
        console.log(heroImage);

        var pageTitle;
        if(self.props.meta.path === "/"){
            pageTitle = React.createElement(
                "h2",
                {className: "ne-row"}
            )
        }
        else{
            pageTitle = React.createElement(
                "h2",
                {
                    className: "ne-row",
                    id: "header-hero-title"
                },
                self.props.meta.title
            )
        }

        var userStatus;
        if(self.props.meta && self.props.meta.claims && self.props.meta.claims.user ){
            userStatus = <a href="/auth/logout" className="topline-user-status"> Protect your privacy: Remember to LOGOUT by clicking here</a>
        }
        else{
            userStatus = <a href="/login" className="topline-user-status"></a>
        }


        return (
            <header id="section-header">
                <div id="header-topline">
                    {userStatus}
                </div>
                <div className="ne-row" id="header-nav">
                    <div className="f" id="header-nav-logo">

                        <a href="/"><img src="/images/header-nav-logo.png" alt="logo"></img></a>

                    </div>
                    <div className="f" id="header-nav-links">
                        <ul>
                            <li className="header-nav-links-link"><a href="/colleges">colleges</a></li>

                            <li className="header-nav-links-link"><a href="/accreditations">accreditations</a></li>
                            <li className="header-nav-links-link"><a href="/courses">courses</a></li>
                            <li className="header-nav-links-link"><a href="/about">about us</a></li>
                            <li className="header-nav-links-link"><a href="/contact">contact us</a></li>
                        </ul>
                    </div>
                    <div className="f" id="header-nav-contact">
                        <div id="header-nav-contact-link">
                            <a href="/applications">Apply Online</a>
                        </div>
                    </div>
                </div>
                <div className="ne-row" id="header-hero-strip" style={{backgroundImage: "url('" + heroImage + "')"}}>
                    {pageTitle}
                </div>
            </header>
        )
    }
}

export default Header;

// todo add back <li className="header-nav-links-link"><a href="/faculties">faculties</a></li>