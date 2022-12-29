import React, { Fragment } from "react"
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./errorpage.css"

function ErrorPage() {

    return (
        <Fragment>
            <Header />
            <h3 className="error error--title">404</h3>
            <h2 className="error error--subtitle">Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/">
                <p className="error error--return">Retourner sur la page d’accueil</p>
            </Link>
            <Footer />
        </Fragment>
    )
}

export default ErrorPage;