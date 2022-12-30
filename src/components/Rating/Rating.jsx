import React from "react";
import './rating.css'
import fullStar from "../../img/star-full.png"
import emptyStar from "../../img/star-empty.png"

class Rating extends React.Component {

    render() {
        const { starsNumber } = this.props;
        return (
            <div className="stars--container">
                <img className="star" src={fullStar} alt="Full star" />
                <img className="star" src={(starsNumber === "1") ? emptyStar : fullStar} alt="Star rating" />
                <img className="star" src={(starsNumber === "3" || starsNumber === "4" || starsNumber === "5") ? fullStar : emptyStar} alt="Star rating" />
                <img className="star" src={(starsNumber === "4" || starsNumber === "5") ? fullStar : emptyStar} alt="Star rating" />
                <img className="star" src={(starsNumber === "5") ? fullStar : emptyStar} alt="Star rating" />
            </div>
        )
    }
}

export default Rating;