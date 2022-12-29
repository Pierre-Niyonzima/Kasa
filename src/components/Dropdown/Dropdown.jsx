import React from "react";
import './dropdown.css'
import ArrowUp from '../../img/arrow-up.png'
import ArrowDown from '../../img/arrow-down.png'

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrowUp: false,
            arrowDown: true,
        };

        this.showContent = this.showContent.bind(this)
        this.hideContent = this.hideContent.bind(this)
    }

    showContent() {
        this.setState({
            arrowUp: true,
            arrowDown: false,
        })
    }

    hideContent() {
        this.setState({
            arrowUp: false,
            arrowDown: true,
        })
    }

    render() {
        const { title, paragraph, equipments, isValue } = this.props;
        const containerClassName = equipments ? "dropdown--container dropdown--right" : isValue ? "dropdown--container dropdown--container--values" : "dropdown--container";
        const titleClassName = isValue ? "dropdown--text dropdown--title dropdown--values dropdown--title--values" : "dropdown--text dropdown--title"
        const contentClassName = isValue ? "dropdown--text dropdown--content dropdown--values" : "dropdown--text dropdown--content";

        return (
            <div className={containerClassName}>
                <div className={titleClassName}>{title}</div>
                {this.state.arrowUp &&
                    <div className={contentClassName}>
                        {paragraph ?
                            paragraph
                            :
                            equipments && equipments.map((equipement, index) => <div key={index}>{equipement}</div>)
                        }
                    </div>
                }
                {this.state.arrowUp && <img className="dropdown--arrow" onClick={this.hideContent} src={ArrowUp} alt="Arrow up" />}
                {this.state.arrowDown && <img className="dropdown--arrow" onClick={this.showContent} src={ArrowDown} alt="Arrow down" />}
            </div>
        )
    }
}

export default Dropdown;