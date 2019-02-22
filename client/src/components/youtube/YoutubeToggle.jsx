import React, { Component } from 'react'
import ToggleButton from '../utilities/button/ToggleButton';

export default class YoutubeToggle extends Component {
    render = () => 
    <div 
        title={this.props.hideYT ? "Hide video":"Show video"}
        style={{ position: "fixed", bottom: "0.5em", right: "0.5em", zIndex: "200" }}
        >
        <ToggleButton 
            hidden={this.props.youtubeVideoCode === ""} 
            master={this.props.hideYT} 
            setMaster={this.props.setHideYT}
            >
            <i className="fab fa-youtube"></i>
        </ToggleButton>
    </div>
}