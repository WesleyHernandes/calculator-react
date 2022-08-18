import "./Button.css"
import React from "react"

const Button = props => {
    let buttonClass = "Button"
    buttonClass += (props.theme && props.theme === "gradient") ? " Gradient" : '' 
    buttonClass += (props.size && props.size === "large") ? " Large" : '' 
    buttonClass += (props.size && props.size === "medium") ? " Medium" : '' 

    return(
        <button className={buttonClass} onClick={e => props.click && props.click(props.label)}>{props.label}</button>
    )
}

export default Button