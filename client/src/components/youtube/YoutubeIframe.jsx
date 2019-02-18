import React, { Component } from 'react'

export default class YoutubeIframe extends Component {
    render = () => <iframe 
        style={{position: 'fixed', left: '0', top: '0', width: '100%', height: '100%',zIndex: this.props.hideYT?"100":"-100"}}
        title='youhou'
        src={this.props.youtubeVideoCode === ""?"":"https://www.youtube.com/embed/"+this.props.youtubeVideoCode+"?autoplay=1" }
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  
    />

}