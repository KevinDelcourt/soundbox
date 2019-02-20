import React, { Component } from 'react'
import { ButtonGroup } from 'reactstrap'
import ReactAudioPlayer from 'react-audio-player'
import LoopButton from './controls/LoopButton'
import Volume from './controls/Volume'
import Speed from './controls/Speed'
import ShuffleButton from './controls/ShuffleButton'
import { getSounds } from '../modules/axios_functions';
import ProgressBar from './atoms/ProgressBar'
import Youtube from './youtube/Youtube'
import MenuBar from './atoms/MenuBar'
import HotkeyButton from './controls/HotkeyButton'
import YoutubeInput from './youtube/YoutubeInput';
import ShowEditButton from './controls/ShowEditButton';
import SoundBoxModal from './atoms/SoundBoxModal';
import PlayButtonArray from './controls/PlayButtonArray';

export default class Soundbox extends Component {

    state = {
        audios: [],
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

    componentDidMount = () => {
        getSounds().then((response)=>{
            this.setState({audios: response.data})
        }).catch((error)=>console.log(error))
    }

    play = (src) => this.setState({ src: src }, () => {
            this.rap.audioEl.playbackRate = this.state.speed
            this.rap.audioEl.currentTime = 0
            this.rap.audioEl.play()
        })
    

    handleKeyDown = (e) => {
        if (e.which - 65 >= 0 && e.which - 65 < this.state.audios.length && !this.state.edit)
            this.play(this.state.audios[e.which - 65].src)
    }

    playRandom = () => this.play(this.state.audios[this.randomIndex()].src)

    randomIndex = () => Math.floor(Math.random() * this.state.audios.length)

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
            
            <SoundBoxModal 
                modal={this.state.modal.isOpen} 
                toggleModal={this.toggleModal} 
                title={this.state.modal.title}
                >
                {this.state.modal.content}
            </SoundBoxModal>

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

            <PlayButtonArray 
                audios={this.state.audios}
                edit={this.state.edit} 
                showHotkeys={this.state.showHotkeys} 
                play={this.play} 
                setModal={this.setModal}
                />
        </div>
}