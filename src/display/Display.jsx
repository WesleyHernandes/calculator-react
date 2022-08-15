import './Display.css'
import React from "react"

const Display = props => {
    return(
        <div className="Display">
            <span>{props.operation}</span>
        </div>
    )
}

export default Display