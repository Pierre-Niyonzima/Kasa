import React from "react";
import LogoKasa from "../../img/logo-kasa.png"
import { Link } from "react-router-dom";
import './header.css'

class Header extends React.Component {

    render() {
        const { homeView, aboutView } = this.props;
        const homeLinkClassName = homeView ? "header--links header--links__padding-right-57 text-decoration-underline" : "header--links header--links__padding-right-57";
        const aboutLinkClassName = aboutView ? "header--links text-decoration-underline" : "header--links";
        return (
            <div className="header--container">
                <Link to="/"><img src={LogoKasa} alt="Logo Kasa" className="header--logo" /></Link>
                <div className="header--links__container">
                    <Link to="/" className="text-decoration-none margin-auto"><div className={homeLinkClassName}>Accueil</div></Link>
                    <Link to="/about" className="text-decoration-none margin-auto"><div className={aboutLinkClassName}>A Propos</div></Link>
                </div>
            </div>
        )
    }
}

export default Header;