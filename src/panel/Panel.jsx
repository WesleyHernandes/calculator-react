import "./Panel.css"
import React from "react"

import Button from './Button'

const Panel = props => {
    return(
        <div className="Panel">
            <div className="Buttons-Content">
                <Button label="CE" size="large" click={props.clearMemory} />
                <Button label={7} />
                <Button label={8} />
                <Button label={9} />
                <Button label={4} />
                <Button label={5} />
                <Button label={6} />
                <Button label={1} />
                <Button label={2} />
                <Button label={3} />
                <Button label="." />
                <Button label={0} size="medium" />
            </div>
            <div className="Operators-Content">
                <Button label="/" theme="gradient" />
                <Button label="*" theme="gradient" />
                <Button label="-" theme="gradient" />
                <Button label="+" theme="gradient" />
                <Button label="=" theme="gradient" />
            </div>
        </div>
    )
}

export default Panel