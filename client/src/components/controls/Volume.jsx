import React from "react";
import { Button, ButtonGroup } from 'reactstrap'

export default class Volume extends React.Component{

    onChange = (evt) => this.props.setVolume(evt.target.value/100)     

    mute = () => {
        if(this.props.volume === 0.0)
            this.props.setVolume(0.5)  
        else
            this.props.setVolume(0.0)
    }

    render(){
        return(
            <ButtonGroup size="lg">
                <Button color="primary"  disabled>
                    <input 
                        type="range" 
                        onChange={(evt)=>this.onChange(evt)}
                        value={this.props.volume*100}
                        />
                </Button>
                <Button color="primary" onClick={this.mute}>
                    {this.props.volume === 0.0 ? <i className="fas fa-volume-mute"></i> : <i className="fas fa-volume-up"></i>}
                </Button>
            </ButtonGroup>
        )
    }
}