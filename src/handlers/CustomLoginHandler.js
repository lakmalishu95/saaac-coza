var React = require('react');

var meta = {
    path: "/custom-login",
    title: "Login",
    description: "Login page",
    css: ["/ne-style/ne-css/neStyleFontAwesome.css"]
};

var handler = React.createClass({

    render: function() {
        var self = this;

        console.log(self.props);

        if(self.props.meta.query.message){
            var message = self.props.meta.query.message
        }
        else{
            var message = "Please Login"
        }

        return (
            <body>
            <div className="ne-row-70">

                <div className="ne-ccol-3s">
                </div>

                <div className="ne-ccol-3s">

                    <h2 id="main-title">Login Page</h2>

                    <div className="login-message">
                        {message}
                    </div>

                    <div className="login-form">
                        <form action="/auth/local/login" method="post">
                            <div>
                                <label>Email:</label>
                                <input type="text" name="email"/>
                            </div>
                            <br/>
                            <div>
                                <label>Password:</label>
                                <input type="password" name="password"/>
                            </div>
                            <br/>
                            <div>
                                <input type="submit" value="Log In"/>
                            </div>
                        </form>
                    </div>

                    <div className="login-facebook">
                        <a href="/auth/facebook">  Login/Signup with Facebook<br/><br/> <i className="fa fa-facebook-square"></i> Facebook</a>
                    </div>

                    <div className="login-signup">
                        <a href="/signup"> Don't have an account yet? <br/><br/>  <i className="fa fa-sign-in"></i> Signup</a>
                    </div>


                </div>


                <div className="ne-ccol-3s">
                </div>
            </div>


            </body>
        )
    }
});

exports.handler = handler;
exports.meta = meta;