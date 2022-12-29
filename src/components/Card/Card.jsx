import React from "react";
import { Link } from "react-router-dom";
import './card.css'

class Card extends React.Component {

    render() {
        const { accomodationData, index } = this.props;
        const divStyle = {
            background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url('${accomodationData.cover}') center no-repeat`,
        };
        return (
            <Link to={`/accomodation/${accomodationData.id}`} className="card--link" >
                <div key={index} style={divStyle} className="card--picture">
                    <span className="card--title">
                        {accomodationData.title}
                    </span>
                </div>
            </Link >
        )
    }
}

export default Card;