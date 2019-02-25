import React from "react"
import { Button, ButtonGroup } from 'reactstrap'
import Context from '../../context'

export default class Speed extends React.Component{
    static contextType = Context

    setSpeed = (value) => this.context.setSb({speed: value})
    
    onChange = (evt) => this.setSpeed(evt.target.value/10)

    cycleSpeed = () => {
        if(this.context.sb.speed === 1)
            this.setSpeed(0.1)
        else    
            this.setSpeed(1)
    }

    render = () => 
        <ButtonGroup>
            <Button disabled color="primary" size="lg">
                <input 
                    type="range" 
                    onChange={this.onChange}
                    value={this.context.sb.speed*10}
                    min="1"
                    max="20"
                    />
            </Button>
            <Button color="primary" size="lg" onClick={this.cycleSpeed}>
                {"x"+(this.context.sb.speed)}
            </Button>
        </ButtonGroup>   
    
}