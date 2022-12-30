import React, { Fragment, useState, useEffect } from "react"
import { useParams, useNavigate} from "react-router-dom"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Dropdown from "../../components/Dropdown/Dropdown"
import Rating from "../../components/Rating/Rating"
import Tag from "../../components/Tag/Tag"
import "./accomodationpage.css"


function AccomodationPage() {
    const id = useParams();
    const navigate = useNavigate();
    let [currentAccomodation, setCurrentAccomodation] = useState(null);

    useEffect(() => {
    fetch("/logements.json")
      .then((response) => response.json())
      .then((data) => {
        if (data.find((accomodation) => accomodation.id === id.id)) {
          const currentAccodomation = data.find(
            (accomodation) => accomodation.id === id.id
          );
          setCurrentAccomodation(currentAccodomation);
        } else {
          navigate("/error");
        }
      });
  }, [navigate, id.id]);


  return (
    <Fragment>
      <Header />
      {currentAccomodation &&
      (<Fragment>
        <div className="accomodation--flex">
             <div className="accomodation--tags__container">
                {currentAccomodation.tags.map((tag, index) => (
                  <Tag key={index} index={index} tagTitle={tag} />
                ))}
              </div>
            <Rating starsNumber={currentAccomodation.rating} /></div>
         <div className="accomodation--flex">
            <Dropdown
              paragraph={currentAccomodation.description}
              title="Description"
            />
            <Dropdown
              equipments={currentAccomodation.equipments}
              title="Équipements"
            />
          </div>
      </Fragment>)}
        
      <Footer />
    </Fragment>
  );
}

export default AccomodationPage;