import React, { Component } from 'react'
import YoutubeIframe from './YoutubeIframe';
import YoutubeToggle from './YoutubeToggle';
import Context from '../../context'

export default class Youtube extends Component{
    static contextType = Context

    state={
        hideYT:false
    }

    setHideYT = (boolean) => this.setState({hideYT: boolean})

    render = () => <div>
        <YoutubeIframe youtubeVideoCode={this.context.sb.youtubeVideoCode} hideYT={this.state.hideYT}/>
        <YoutubeToggle youtubeVideoCode={this.context.sb.youtubeVideoCode} hideYT={this.state.hideYT} setHideYT={this.setHideYT}/>
    </div>
}