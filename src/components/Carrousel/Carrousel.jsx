import React from "react";
import "./carrousel.css";
import ArrowRight from "../../img/arrow-right.png";
import ArrowLeft from "../../img/arrow-left.png";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };

    this.previousPicture = this.previousPicture.bind(this);
    this.nextPicture = this.nextPicture.bind(this);
  }

  previousPicture() {
    this.state.index === 0
      ? this.setState({
          index: this.props.pictures.length - 1,
        })
      : this.setState({
          index: this.state.index - 1,
        });
  }

  nextPicture() {
    this.state.index === this.props.pictures.length - 1
      ? this.setState({
          index: 0,
        })
      : this.setState({
          index: this.state.index + 1,
        });
  }

  render() {
    const { pictures } = this.props;

    return (
      <div className="carousel--container">
        {pictures.length > 1 && (
          <img
            className="carousel--previous"
            src={ArrowLeft}
            alt="Left"
            onClick={this.previousPicture}
          />
        )}
        <img
          className="carousel--picture"
          src={pictures[this.state.index]}
          alt="Accomodation"
        />
        {pictures.length > 1 && (
          <img
            className="carousel--next"
            src={ArrowRight}
            alt="Right"
            onClick={this.nextPicture}
          />
        )}
        {pictures.length > 1 && (
          <div className="carousel--index">
            {this.state.index + 1}/{pictures.length}
          </div>
        )}
      </div>
    );
  }
}

export default Carousel;
