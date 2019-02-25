import React from "react";
import { Button, ButtonGroup } from 'reactstrap'
import Context from '../../context'

export default class Volume extends React.Component{
    static contextType = Context

    setVolume = (value) => this.context.setSb({volume: value})
   
    onChange = (evt) => this.setVolume(evt.target.value/100)     

    mute = () => {
        if(this.context.sb.volume === 0.0)
            this.setVolume(0.5)  
        else
            this.setVolume(0.0)
    }

    render(){
        return(
            <ButtonGroup size="lg">
                <Button color="primary"  disabled>
                    <input 
                        type="range" 
                        onChange={this.onChange}
                        value={this.context.sb.volume*100}
                        />
                </Button>
                <Button color="primary" onClick={this.mute}>
                    {this.context.sb.volume === 0.0 ? <i className="fas fa-volume-mute"></i> : <i className="fas fa-volume-up"></i>}
                </Button>
            </ButtonGroup>
        )
    }
}