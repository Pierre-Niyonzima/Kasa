import React from "react";
import LogoKasaDark from "../../img/logo-kasa-dark.png"
import './footer.css'

class Footer extends React.Component {

    render() {
        return (
            <div className="footer--container">
                <img src={LogoKasaDark} alt="Logo Kasa" className="footer--logo" />
                <div className="footer--copyright">© 2020 Kasa. All rights reserved</div>
            </div>
        )
    }
}

export default Footer;