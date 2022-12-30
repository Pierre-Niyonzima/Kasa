import React, { Fragment, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Dropdown from "../../components/Dropdown/Dropdown";
import Rating from "../../components/Rating/Rating";
import Carrousel from "../../components/Carrousel/Carrousel";
import Tag from "../../components/Tag/Tag";
import "./accomodationpage.css";

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
      <Header />{" "}
      {currentAccomodation && (
        <Fragment>
          <Carrousel pictures={currentAccomodation.pictures} />
          <div className="accomodation--flex">
            <div>
              <div>
                <h2 className="accomodation--text accomodation--title">
                  {currentAccomodation.title}
                </h2>
                <span className="accomodation--text accomodation--location">
                  {currentAccomodation.location}
                </span>
              </div>
              <div className="accomodation--tags__container">
                {currentAccomodation.tags.map((tag, index) => (
                  <Tag key={index} index={index} tagTitle={tag} />
                ))}
              </div>
            </div>
            <div>
              <div className="accomodation--host__container">
                <div className="accomodation--text accomodation--host__name">
                  {currentAccomodation.host.name}
                </div>
                <img
                  src={currentAccomodation.host.picture}
                  alt="Host"
                  className="accomodation--host__picture"
                />
              </div>
              <Rating starsNumber={currentAccomodation.rating} />
            </div>
          </div>
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
        </Fragment>
      )}
      <Footer />
    </Fragment>
  );
}

export default AccomodationPage;
