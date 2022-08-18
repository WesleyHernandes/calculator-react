import "./Panel.css"
import React from "react"

import Button from './Button'

const Panel = props => {
    return(
        <div className="Panel">
            <div className="Buttons-Content">
                <Button label="CE" size="large" click={_ => props.clearMemory()} />
                <Button label={7} click={_ => props.setDigit(7)} />
                <Button label={8} click={_ => props.setDigit(8)} />
                <Button label={9} click={_ => props.setDigit(9)} />
                <Button label={4} click={_ => props.setDigit(4)} />
                <Button label={5} click={_ => props.setDigit(5)} />
                <Button label={6} click={_ => props.setDigit(6)} />
                <Button label={1} click={_ => props.setDigit(1)} />
                <Button label={2} click={_ => props.setDigit(2)} />
                <Button label={3} click={_ => props.setDigit(3)} />
                <Button label="." click={_ => props.setDigit('.')} />
                <Button label={0} size="medium" click={_ => props.setDigit(0)} />
            </div>
            <div className="Operators-Content">
                <Button label="/" theme="gradient" click={_ => props.setOperation('/')} />
                <Button label="*" theme="gradient" click={_ => props.setOperation('*')} />
                <Button label="-" theme="gradient" click={_ => props.setOperation('-')} />
                <Button label="+" theme="gradient" click={_ => props.setOperation('+')} />
                <Button label="=" theme="gradient" click={_ => props.setOperation('=')} />
            </div>
        </div>
    )
}

export default Panel