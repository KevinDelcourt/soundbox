import React, { Component } from 'react'
import ToggleButton from '../atoms/ToggleButton';

export default class ShuffleButton extends Component{

    render = () => 
        <ToggleButton 
            title={this.props.shuffle?"Turn off shuffle":"Turn on shuffle"}
            master={this.props.shuffle} 
            setMaster={this.props.setShuffle}
            >
            <i className="fas fa-random"></i>
        </ToggleButton>
        
}