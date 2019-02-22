import React, { Component } from 'react'
import ToggleButton from '../utilities/button/ToggleButton';

export default class ShowEditButton extends Component{
    render = () => 
        <ToggleButton 
            title={this.props.edit?"Hide admin buttons":"Show admin buttons"}
            master={this.props.edit} 
            setMaster={this.props.setEdit}
            >
            <i className="fas fa-lock"></i>
        </ToggleButton>
}