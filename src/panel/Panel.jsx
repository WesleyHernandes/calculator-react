import "./Panel.css"
import React from "react"

import Button from './Button'

const Panel = props => {
    return(
        <div className="Panel">
            <div className="Buttons-Content">
                <Button number="CE" size="medium" theme="gradient" />
                <Button number="C" size="medium" theme="gradient" />
                <Button number={7} setDisplay={() => { props.setDisplay(7) }} />
                <Button number={8} setDisplay={() => { props.setDisplay(8) }}/>
                <Button number={9} setDisplay={() => { props.setDisplay(9) }}/>
                <Button number={4} setDisplay={() => { props.setDisplay(4) }}/>
                <Button number={5} setDisplay={() => { props.setDisplay(5) }}/>
                <Button number={6} setDisplay={() => { props.setDisplay(6) }}/>
                <Button number={1} setDisplay={() => { props.setDisplay(1) }}/>
                <Button number={2} setDisplay={() => { props.setDisplay(2) }}/>
                <Button number={3} setDisplay={() => { props.setDisplay(3) }}/>
                <Button number="." setDisplay={() => { props.setDisplay(".") }}/>
                <Button number={0} setDisplay={() => { props.setDisplay(0) }}/>
                <Button number="<" backSpace={true} />
            </div>
            <div className="Operators-Content">
                <Button number="/" theme="gradient" setDisplay={() => { props.setDisplay("/") }} />
                <Button number="*" theme="gradient" setDisplay={() => { props.setDisplay("*") }}/>
                <Button number="-" theme="gradient" setDisplay={() => { props.setDisplay("-") }}/>
                <Button number="+" theme="gradient" setDisplay={() => { props.setDisplay("+") }}/>
                <Button number="=" theme="gradient" />
            </div>
        </div>
    )
}

export default Panel