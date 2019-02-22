import React, { Component } from 'react'
import ToggleButton from '../utilities/button/ToggleButton';

export default class LoopButton extends Component{

    render = () => 
        <ToggleButton 
            title={this.props.loop?"Turn off autoplay":"Turn on autoplay"}
            master={this.props.loop} 
            setMaster={this.props.setLoop}
            >
            <i className="fas fa-redo-alt"></i>
        </ToggleButton>
        
    
}