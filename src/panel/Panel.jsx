import "./Panel.css"
import React from "react"

import Button from './Button'

export default () => {
    return(
        <div className="Panel">
            <div className="Buttons-Content">
                <Button number="CE" size="medium" theme="gradient" />
                <Button number="C" size="medium" theme="gradient" />
                <Button number={7} />
                <Button number={8} />
                <Button number={9} />
                <Button number={4} />
                <Button number={5} />
                <Button number={6} />
                <Button number={1} />
                <Button number={2} />
                <Button number={3} />
                <Button number="." />
                <Button number={0} />
                <Button number="<" backSpace={true} />
            </div>
            <div className="Operators-Content">
                <Button number="/" theme="gradient" />
                <Button number="*" theme="gradient"/>
                <Button number="-" theme="gradient"/>
                <Button number="+" theme="gradient"/>
                <Button number="=" theme="gradient"/>
            </div>
        </div>
    )
}