var React = require('react');

class Header extends React.Component {

    render(){
        var self = this;

        var user;
        if (self.props.meta && self.props.meta.claims && self.props.meta.claims.user){
            var text = self.props.meta.claims.displayName;
            user =
                <ul>
                    <li><a href="/profile">{text}</a></li>
                    <li><a href="/admin">Admin</a></li>
                    <li><a href="/admin/users">Users</a></li>
                    <li><a href="/auth/logout">Logout</a></li>
                </ul>
        }
        else {
            user =
                <ul>
                    <li><a href="/login">Login</a></li>
                </ul>
        }


        return (
            <header className="section" id="section-header">
                <div id="section-header-inner">
                    <h1>This is the Header</h1>
                    <div>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about" id="about-link">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/people">People</a></li>
                        </ul>
                    </div>
                    <div>
                        {user}
                    </div>

                </div>
            </header>
        )
    }
}

export default Header;