import React, { Component } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import ProgressBar from './ProgressBar';
import Youtube from '../youtube/Youtube';

export default class AudioPlayer extends Component {

    state={ percent: 0 }

    componentDidUpdate = () => {
        this.player.audioEl.playbackRate = this.props.sb.speed;
    }

    updateProgressBar = () =>
        this.setState({ percent: this.player.audioEl.currentTime * 100 / this.player.audioEl.duration })

    onEnded = () => this.setState({percent: 0},this.props.onEnded)
    
    render = () =>
        <div>
            <ProgressBar value={this.state.percent} />
            <Youtube youtubeVideoCode={this.props.sb.youtubeVideoCode} />
            <ReactAudioPlayer
                ref={(ref) => { this.player = ref }}
                listenInterval={100}
                onListen={this.updateProgressBar}
                onEnded={this.onEnded}

                src={this.props.src}
                loop={this.props.sb.loop}
                volume={this.props.sb.volume}
                />
        </div>
}
