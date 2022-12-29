import React, { Fragment } from "react"
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Dropdown from "../../components/Dropdown/Dropdown";
import Banner from "../../img/banner-about.png"
import "./aboutpage.css"

function AboutPage() {
    const fiabiliteDescription = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
    const respectDescription = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
    const serviceDescription = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
    const responsabilitéDescription = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

    return (
        <Fragment>
            <Header aboutView={true} />
            <div className="banner--container">
                <img src={Banner} alt="Banner" className="banner--responsive--about_page" />
            </div>
            <Dropdown paragraph={fiabiliteDescription} title="Fiabilité" isValue={true} />
            <Dropdown paragraph={respectDescription} title="Respect" isValue={true} />
            <Dropdown paragraph={serviceDescription} title="Service" isValue={true} />
            <Dropdown paragraph={responsabilitéDescription} title="Responsabilité" isValue={true} />
            <Footer />
        </Fragment>
    )
}

export default AboutPage