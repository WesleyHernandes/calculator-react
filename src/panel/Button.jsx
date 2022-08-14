import "./Button.css"
import React from "react"

export default props => {
    let buttonClass = "Button"

    if(props.theme && props.theme === "gradient"){
        buttonClass += " Gradient" 
    }

    if(props.size && props.size === "medium"){
        buttonClass += " Medium" 
    }

    return(
        <button className={buttonClass}>
            {
                (props.backSpace) ? 
                    <svg className="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z" clip-rule="evenodd" />
                    </svg>
                : 
                props.number
            }
            </button>
    )
}