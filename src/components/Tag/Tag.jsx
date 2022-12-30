import React from "react"
import './tag.css'

class Tag extends React.Component {

    render() {
        const { tagTitle, index } = this.props;
        return (
            <div key={index} className="tag">
                {tagTitle}
            </div>
        )
    }
}

export default Tag;