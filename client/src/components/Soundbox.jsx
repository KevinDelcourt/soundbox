import React, { Component } from 'react'
import { Container, Row, Col, ButtonGroup, Alert } from 'reactstrap'
import ReactAudioPlayer from 'react-audio-player'
import PlayButton from './controls/PlayButton'
import LoopButton from './controls/LoopButton'
import Volume from './controls/Volume'
import Speed from './controls/Speed'
import ShuffleButton from './controls/ShuffleButton'

import ProgressBar from './atoms/ProgressBar'
import Youtube from './youtube/Youtube'
import MenuBar from './atoms/MenuBar'
import HotkeyButton from './controls/HotkeyButton'
import YoutubeInput from './youtube/YoutubeInput';

export default class Soundbox extends Component {

    state = {
        percent: 0,
        loop: false,
        volume: 0.5,
        speed: 1,
        shuffle: false,
        showHotkeys: false,
        youtubeVideoCode:"",
        src: null
    }
    
    rap

    componentWillMount = () => document.addEventListener('keydown', this.handleKeyDown.bind(this))

    play = (src) => {
        this.setState({ src: src }, () => {
            this.rap.audioEl.playbackRate = this.state.speed
            this.rap.audioEl.currentTime = 0
            this.rap.audioEl.play()
        })
    }

    handleKeyDown(e) {
        if (e.which - 65 >= 0 && e.which - 65 < this.props.audios.length)
            this.play(this.props.audios[e.which - 65].src)
    }

    playRandom = () => this.play(this.props.audios[this.randomIndex()].src)

    randomIndex = () => Math.floor(Math.random() * this.props.audios.length)

    setLoop = (boolean) => this.setState({ loop: boolean, shuffle: false })
    setShuffle = (boolean) => this.setState({ shuffle: boolean, loop: false })
    setVolume = (volume) => this.setState({ volume: volume })
    setCode = (code) => this.setState({youtubeVideoCode: code})
    setShowHotkeys = (boolean) => this.setState({ showHotkeys: boolean})

    setSpeed = (speed) => {
        this.setState({ speed: speed })
        this.rap.audioEl.playbackRate = speed
    }

    updateProgressBar = () =>
        this.setState({ percent: this.rap.audioEl.currentTime * 100 / this.rap.audioEl.duration })

    onEnded = () => {
        this.setState({ percent: 0 })
        if (this.state.shuffle)
            this.playRandom()
    }
    
    render = () => 
        <div>
            <ProgressBar value={this.state.percent} height="3" />
            <Youtube youtubeVideoCode={this.state.youtubeVideoCode} />
            <ReactAudioPlayer
                    src={this.state.src}
                    listenInterval={100}
                    onListen={this.updateProgressBar}
                    onEnded={this.onEnded}
                    ref={(element) => { this.rap = element }}
                    loop={this.state.loop}
                    volume={this.state.volume}
                />

            <MenuBar brand={<Volume volume={this.state.volume} setVolume={this.setVolume} />}>
                <Speed speed={this.state.speed} setSpeed={this.setSpeed} />
                <ButtonGroup>
                    <LoopButton setLoop={this.setLoop} loop={this.state.loop} />
                    <ShuffleButton setShuffle={this.setShuffle} shuffle={this.state.shuffle} />
                    <HotkeyButton setShowHotkeys={this.setShowHotkeys} showHotkeys={this.state.showHotkeys} />
                </ButtonGroup>
                <YoutubeInput youtubeVideoCode={this.state.youtubeVideoCode} setCode={this.setCode} />
                
            </MenuBar>
            <Container> 
                <Row>
                    {this.props.audios.length > 0 ? this.props.audios.map((a, index) =>
                        <Col key={index} xs="12" sm="6" md="4" lg="3" style={{ marginTop: "1em", height: "4.5em" }}>
                            <PlayButton showHotkeys={this.state.showHotkeys} index={index} onClick={() => this.play(a.src)}>{a.name}</PlayButton>
                        </Col>
                    ):<Alert>No sounds loaded</Alert>}
                </Row>
            </Container>
        </div>
}