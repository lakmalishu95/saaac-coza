var React = require('react');
var element = React.createElement;

class Footer extends React.Component {

    render(){
        var self = this;

        var login;
        if (self.props.meta && self.props.meta.claims && self.props.meta.claims.user){
            var text = self.props.meta.claims.displayName;
            login = element(
                "ul",{},
                element(
                    "li",{},
                    element(
                        "a",{href: "/profile"},
                        text
                    )
                )
            )
        }
        else {
            login = element(
                "ul",{},
                element(
                    "li",{},
                    element(
                        "a",{href: "/login"}
                    )
                )
            )
        }

        return (
            element(
                "footer",{className:"section", id:"section-footer"},
                element(
                    "div",{},
                    element(
                        "div",{className: "ne-row-960"},
                        element(
                            "div",{className: "footer-colleges"},
                            element(
                                "h4",{className: "footer-heading"},
                                "Colleges"
                            ),
                            element(
                                "ul",{},
                                element(
                                    "li",{className: "footer-list"},
                                    element(
                                        "a",{href:"/#"},
                                        "Pretoria Prestige College Campus"
                                    )
                                ),
                                element(
                                    "li",{className: "footer-list"},
                                    element(
                                        "a",{href:"/#"},
                                        "East Rand Campus"
                                    )
                                ),
                                element(
                                    "li",{className: "footer-list"},
                                    element(
                                        "a",{href:"/#"},
                                        "Queenstown Campus"
                                    )
                                ),
                                element(
                                    "li",{className: "footer-list"},
                                    element(
                                        "a",{href:"/#"},
                                        "Durban Campus"
                                    )
                                ),
                                element(
                                    "li",{className: "footer-list"},
                                    element(
                                        "a",{href:"/#"},
                                        "East London Campus"
                                    )
                                ),
                                element(
                                    "li",{className: "footer-list"},
                                    element(
                                        "a",{href:"/#"},
                                        "Sterkstroom Campus"
                                    )
                                )
                            )
                        ),
                        element(
                            "div",{className: "footer-faculties"},
                            element(
                                "h4",{className: "footer-heading"},
                                "."
                            )
                        ),
                        element(
                            "div",{className: "footer-contact"},
                            element(
                                "h4",{className: "footer-heading"},
                                "Contact Us"
                            ),
                            element(
                                "div",{className: "footer-contact-inner"},
                                element(
                                    "form",{action: "/emails/sendgrid/inbound", method: "post"},
                                    element(
                                        "label",{className: "footer-contact-label"},
                                        "name"
                                    ),
                                    element(
                                        "br",{}
                                    ),
                                    element(
                                        "input",{type: "text", name: "name", className: "input-text-fill footer-contact-input"}
                                    ),
                                    element(
                                        "br",{}
                                    ),
                                    element(
                                        "label",{className: "footer-contact-label"},
                                        "email"
                                    ),
                                    element(
                                        "br",{}
                                    ),
                                    element(
                                        "input",{type: "text", name: "from", className: "input-text-fill footer-contact-input"}
                                    ),
                                    element(
                                        "br",{}
                                    ),
                                    element(
                                        "label",{className: "footer-contact-label"},
                                        "phone"
                                    ),
                                    element(
                                        "br",{}
                                    ),
                                    element(
                                        "input",{type: "text", name: "phone", className: "input-text-fill footer-contact-input"}
                                    ),
                                    element(
                                        "br",{}
                                    ),
                                    element(
                                        "label",{className: "footer-contact-label"},
                                        "message"
                                    ),
                                    element(
                                        "br",{}
                                    ),
                                    element(
                                        "input",{type: "text", name: "body", className: "input-text-fill footer-contact-input"}
                                    ),
                                    element(
                                        "br",{}
                                    ),
                                    element(
                                        "input",{type: "submit", value: "Send", className: "footer-contact-submit"}
                                    )
                                )
                            )
                        )
                    ),
                    element(
                        "div", {className: "footer-copyright"},
                        element(
                            "small",{},
                            "Copyright © 2019"
                        )
                    )
                )

            )
        )
    }
}

export default Footer;
