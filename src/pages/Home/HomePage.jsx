import React, { Fragment, useState, useEffect } from "react"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import Banner from "../../img/banner.png"
import "./homepage.css";

function HomePage() {
    let [accomodationsData, setAccomodationsData] = useState(null)

    useEffect(() => {
        fetch("/logements.json")
            .then(response => response.json())
            .then(data => setAccomodationsData(data))
    }, [])

     return (
    <Fragment>
        <Header homeView={true} />
            <div className="banner--container">
                <img src={Banner} alt="Banner" className="banner--img" />
                <div className="banner--title">
                    Chez vous, partout et ailleurs
                </div>
            </div>
            {accomodationsData &&
                <div className="accomodation--container">
                 {accomodationsData.map((accomodation, index) => <Card key={index} index={index} accomodationData={accomodation} />)}
                </div>
            }
        <Footer/>
    </Fragment>    
    )
}

export default HomePage
