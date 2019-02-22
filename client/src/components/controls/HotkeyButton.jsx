import React, { Component } from 'react'
import ToggleButton from '../utilities/button/ToggleButton';

export default class HotkeyButton extends Component {
    render = () => 
    <ToggleButton 
        title={this.props.showHotkeys ? "Hide hotkeys":"Show hotkeys"}
        master={this.props.showHotkeys} 
        setMaster={this.props.setShowHotkeys}
        > 
        <i className="fas fa-keyboard"></i>
    </ToggleButton>
}
