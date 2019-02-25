import React, { Component } from 'react'
import ToggleButton from '../utilities/button/ToggleButton';
import Context from '../../context'

export default class LoopButton extends Component{
    static contextType = Context

    setLoop = (boolean) => this.context.setSb({loop: boolean, shuffle: false})

    render = () => 
        <ToggleButton 
            title={this.context.sb.loop?"Turn off autoplay":"Turn on autoplay"}
            master={this.context.sb.loop} 
            setMaster={this.setLoop}
            >
            <i className="fas fa-redo-alt"></i>
        </ToggleButton>
        
    
}