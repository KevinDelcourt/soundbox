import React, { Component } from 'react'
import YoutubeInput from './YoutubeInput';
import YoutubeIframe from './YoutubeIframe';
import YoutubeToggle from './YoutubeToggle';

export default class Youtube extends Component{
    state={
        youtubeVideoCode:"",
        hideYT:false
    }

    setCode = (code) => this.setState({youtubeVideoCode: code})

    setHideYT = (boolean) => this.setState({hideYT: boolean})

    render = () => <div>
        <YoutubeInput youtubeVideoCode={this.state.youtubeVideoCode} setCode={this.setCode}/>
        <YoutubeIframe youtubeVideoCode={this.state.youtubeVideoCode} hideYT={this.state.hideYT}/>
        <YoutubeToggle youtubeVideoCode={this.state.youtubeVideoCode} hideYT={this.state.hideYT} setHideYT={this.setHideYT}/>
    </div>
}