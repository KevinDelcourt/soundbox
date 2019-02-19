import React, { Component } from 'react'
import YoutubeIframe from './YoutubeIframe';
import YoutubeToggle from './YoutubeToggle';

export default class Youtube extends Component{
    state={
        hideYT:false
    }

    setHideYT = (boolean) => this.setState({hideYT: boolean})

    render = () => <div>
        <YoutubeIframe youtubeVideoCode={this.props.youtubeVideoCode} hideYT={this.state.hideYT}/>
        <YoutubeToggle youtubeVideoCode={this.props.youtubeVideoCode} hideYT={this.state.hideYT} setHideYT={this.setHideYT}/>
    </div>
}