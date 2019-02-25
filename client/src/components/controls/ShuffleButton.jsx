import React, { Component } from 'react'
import ToggleButton from '../utilities/button/ToggleButton';
import Context from '../../context'

export default class ShuffleButton extends Component{
    static contextType = Context

    setShuffle = (boolean) => this.context.setSb({shuffle: boolean, loop: false})
    render = () => 
        <ToggleButton 
            title={this.context.sb.shuffle?"Turn off shuffle":"Turn on shuffle"}
            master={this.context.sb.shuffle} 
            setMaster={this.setShuffle}
            >
            <i className="fas fa-random"></i>
        </ToggleButton>
        
}