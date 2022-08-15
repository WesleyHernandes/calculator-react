import "./Button.css"
import React from "react"

import IconCalculator from '../icons/Calculator'

const Button = props => {
    let buttonClass = "Button"

    if(props.theme && props.theme === "gradient"){
        buttonClass += " Gradient" 
    }

    if(props.size && props.size === "medium"){
        buttonClass += " Medium" 
    }

    return(
        <button className={buttonClass} onClick={() => { props.setDisplay() }}>
            {
                (props.backSpace) ? 
                    <IconCalculator />
                : 
                props.number
            }
        </button>
    )
}

export default Button