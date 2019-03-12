import React, { Component } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import ProgressBar from './ProgressBar'
import Context from '../../context'
import Spectrum from 'react-audio-spectrum'


export default class AudioPlayer extends Component {
    static contextType = Context

    state={ percent: 0 }

    componentDidUpdate = () => {
        this.player.audioEl.playbackRate = this.context.sb.speed;
    }

    updateProgressBar = () =>
        this.setState({ percent: this.player.audioEl.currentTime * 100 / this.player.audioEl.duration })

    onEnded = () => this.setState({percent: 0},this.props.onEnded)
    
    render = () =>
        <div>
            <ProgressBar value={this.state.percent} />
            <ReactAudioPlayer
                ref={(ref) => { this.player = ref }}
                listenInterval={100}
                onListen={this.updateProgressBar}
                onEnded={this.onEnded}
                id="mainAudio"
                src={this.props.src}
                loop={this.context.sb.loop}
                volume={this.context.sb.volume}
                />
            <div style={{position: "fixed", left:"0", top:"0", width: "100%", height: "100%", zIndex: "0"}}>
                <Spectrum 
                    audioId='mainAudio'
                    width={window.innerWidth}
                    height={window.innerHeight}
                    />
            </div>
            
        </div>
}
