import React, { Component } from 'react'
import ToggleButton from '../utilities/button/ToggleButton';
import Context from '../../context'

export default class ShowEditButton extends Component{
    static contextType = Context

    setEdit = (boolean) => this.context.setSb({edit: boolean, hotKeys: false})
    
    render = () => 
        <ToggleButton 
            title={this.context.sb.edit?"Hide admin buttons":"Show admin buttons"}
            master={this.context.sb.edit} 
            setMaster={this.setEdit}
            >
            <i className="fas fa-lock"></i>
        </ToggleButton>
}