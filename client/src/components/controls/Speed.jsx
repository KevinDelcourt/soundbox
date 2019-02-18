import React from "react"
import { Button, ButtonGroup } from 'reactstrap'

export default class Speed extends React.Component{
    
    onChange = (evt) => this.props.setSpeed(evt.target.value/10)

    cycleSpeed = () => {
        if(this.props.speed === 1)
            this.props.setSpeed(0.1)
        else    
            this.props.setSpeed(1)
    }

    render = () => 
        <ButtonGroup>
            <Button disabled color="primary" size="lg">
                <input 
                    type="range" 
                    onChange={(evt)=>this.onChange(evt)}
                    value={this.props.speed*10}
                    min="1"
                    max="20"
                    />
            </Button>
            <Button color="primary" size="lg" onClick={this.cycleSpeed}>
                {"x"+(this.props.speed)}
            </Button>
        </ButtonGroup>   
    
}