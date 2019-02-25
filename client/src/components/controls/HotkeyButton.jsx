import React, { Component } from 'react'
import ToggleButton from '../utilities/button/ToggleButton';
import Context from '../../context'

export default class HotkeyButton extends Component {
    static contextType = Context

    setHotKeys = (boolean) => this.context.setSb({hotKeys: boolean})
    render = () => 
    <ToggleButton 
        title={this.context.sb.hotKeys ? "Hide hotkeys":"Show hotkeys"}
        master={this.context.sb.hotKeys} 
        setMaster={this.setHotKeys}
        > 
        <i className="fas fa-keyboard"></i>
    </ToggleButton>
}
