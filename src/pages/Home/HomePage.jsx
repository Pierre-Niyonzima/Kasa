
import { Fragment } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../img/banner.png"
import "./homepage.css";

function HomePage() {

     return (
    <Fragment>
        <Header homeView={true} />
            <div className="banner--container">
                <img src={Banner} alt="Banner" className="banner--img" />
                <div className="banner--title">
                    Chez vous, partout et ailleurs
                </div>
            </div>
        <Footer/>
    </Fragment>    
    )
}

export default HomePage
