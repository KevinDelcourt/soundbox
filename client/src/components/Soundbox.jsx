import React, { Component } from 'react'
import { Container, Row, Col, ButtonGroup, Alert } from 'reactstrap'
import ReactAudioPlayer from 'react-audio-player'
import LoopButton from './controls/LoopButton'
import Volume from './controls/Volume'
import Speed from './controls/Speed'
import ShuffleButton from './controls/ShuffleButton'

import ProgressBar from './atoms/ProgressBar'
import Youtube from './youtube/Youtube'
import MenuBar from './atoms/MenuBar'
import HotkeyButton from './controls/HotkeyButton'
import YoutubeInput from './youtube/YoutubeInput';
import PlayButtonGroup from './controls/PlayButtonGroup';
import ShowEditButton from './controls/ShowEditButton';
import SoundBoxModal from './atoms/SoundBoxModal';

export default class Soundbox extends Component {

    state = {
        modal: {
            isOpen: false,
            title: "",
            content: ""
        },
        percent: 0,
        loop: false,
        volume: 0.5,
        speed: 1,
        shuffle: false,
        showHotkeys: false,
        youtubeVideoCode:"",
        src: null,
        edit: false
    }
    
    rap

    componentWillMount = () => document.addEventListener('keydown', this.handleKeyDown.bind(this))

    play = (src) => this.setState({ src: src }, () => {
            this.rap.audioEl.playbackRate = this.state.speed
            this.rap.audioEl.currentTime = 0
            this.rap.audioEl.play()
        })
    

    handleKeyDown = (e) => {
        if (e.which - 65 >= 0 && e.which - 65 < this.props.audios.length && !this.state.edit)
            this.play(this.props.audios[e.which - 65].src)
    }

    playRandom = () => this.play(this.props.audios[this.randomIndex()].src)

    randomIndex = () => Math.floor(Math.random() * this.props.audios.length)

    setLoop = (boolean) => this.setState({ loop: boolean, shuffle: false })
    setShuffle = (boolean) => this.setState({ shuffle: boolean, loop: false })
    setVolume = (volume) => this.setState({ volume: volume })
    setCode = (code) => this.setState({youtubeVideoCode: code})
    setEdit = (boolean) => this.setState({edit: boolean, showHotkeys: false})
    setShowHotkeys = (boolean) => this.setState({ showHotkeys: boolean, edit: false})
    setModal = (modal) => this.setState({modal: modal})
    
    toggleModal = () => {
        let newModal = this.state.modal
        newModal.isOpen = !this.state.modal.isOpen
        this.setState({modal: newModal})
    }

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
            <SoundBoxModal modal={this.state.modal.isOpen} toggleModal={this.toggleModal} title={this.state.modal.title}>{this.state.modal.content}</SoundBoxModal>
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
                    <ShowEditButton setEdit={this.setEdit} edit={this.state.edit} />
                </ButtonGroup>
                <YoutubeInput youtubeVideoCode={this.state.youtubeVideoCode} setCode={this.setCode} />        
            </MenuBar>
            <Container> 
                <Row>
                    {this.props.audios.length > 0 ? this.props.audios.map((a, index) =>
                        <Col key={index} xs="12" sm="6" md="4" lg="3" style={{ marginTop: "1em", height: "4.5em" }}>
                            <PlayButtonGroup edit={this.state.edit} showHotkeys={this.state.showHotkeys} index={index} play={this.play} sound={a} setModal={this.setModal}>{a.name}</PlayButtonGroup>
                        </Col>
                    ):<Alert>No sounds loaded</Alert>}
                </Row>
            </Container>
        </div>
}