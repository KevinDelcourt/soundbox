import React, { Component } from 'react'
import { ButtonGroup } from 'reactstrap'
import ReactAudioPlayer from 'react-audio-player'
import LoopButton from './controls/LoopButton'
import Volume from './controls/Volume'
import Speed from './controls/Speed'
import ShuffleButton from './controls/ShuffleButton'
import { getSounds } from '../modules/axios_functions';
import ProgressBar from './soundbox/ProgressBar'
import Youtube from './youtube/Youtube'
import MenuBar from './soundbox/MenuBar'
import HotkeyButton from './controls/HotkeyButton'
import ShowEditButton from './controls/ShowEditButton';
import SoundBoxModal from './soundbox/SoundBoxModal';
import PlayButtonArray from './soundbox/PlayButtonArray';
import UploadFormButton from './sound_management/upload_sound/UploadFormButton'
import Navigation from './soundbox/Navigation';
import YoutubeInputButton from './youtube/YoutubeInputButton';

export default class Soundbox extends Component {

    state = {
        page: 0,
        audioCount: 0,
        audios: [],
        modal: {
            isOpen: false,
            title: "",
            content: "",
            size: ""
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

    iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)

    componentWillMount = () => document.addEventListener('keydown', this.handleKeyDown.bind(this))

    componentDidMount = () => {
        getSounds(this.state.page).then((response)=>{
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
        if (e.which === 188 && !this.state.edit)
            if(this.state.speed === 1)
                this.setSpeed(0.1)
            else
                this.setSpeed(1)
    }

    playRandom = () => this.play(this.state.audios[this.randomIndex()].src)

    randomIndex = () => Math.floor(Math.random() * this.state.audios.length)


    setVolume = (volume) => this.setState({ volume: volume })
    setCode = (code) => this.setState({youtubeVideoCode: code})
    setEdit = (boolean) => this.setState({edit: boolean, showHotkeys: false})
    setShowHotkeys = (boolean) => this.setState({ showHotkeys: boolean, edit: false})
    setModal = (modal) => this.setState({modal: modal})
    
    setPage = (page) => this.setState({page: page},()=>this.componentDidMount()) 

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

    onAudioEnded = () => {
        this.setState({ percent: 0 })
        if (this.state.shuffle)
            this.playRandom()
    }
    
    render = () => 
        <div>
            <ProgressBar value={this.state.percent} />
            <Youtube youtubeVideoCode={this.state.youtubeVideoCode} />
            
            <SoundBoxModal 
                modal={this.state.modal} 
                toggleModal={this.toggleModal} 
                onClosed={this.componentDidMount}
                />

            <ReactAudioPlayer
                    src={this.state.src}
                    listenInterval={100}
                    onListen={this.updateProgressBar}
                    onEnded={this.onAudioEnded}
                    ref={(element) => { this.rap = element }}
                    loop={this.state.loop}
                    volume={this.state.volume}
                />

            <MenuBar brand={this.iOS?<Speed speed={this.state.speed} setSpeed={this.setSpeed} />:<Volume volume={this.state.volume} setVolume={this.setVolume} />}>
                {this.iOS?"":<Speed speed={this.state.speed} setSpeed={this.setSpeed} />}
                {this.state.edit?
                    <ButtonGroup size="lg">
                        <UploadFormButton setModal={this.setModal} play={this.play}/>
                    </ButtonGroup>
                    :
                    <ButtonGroup size="lg">
                        <LoopButton setLoop={this.setLoop} loop={this.state.loop} />
                        <ShuffleButton setShuffle={this.setShuffle} shuffle={this.state.shuffle} />
                        <HotkeyButton setShowHotkeys={this.setShowHotkeys} showHotkeys={this.state.showHotkeys} />
                        <YoutubeInputButton youtubeVideoCode={this.state.youtubeVideoCode} setCode={this.setCode} setModal={this.setModal}/>
                    </ButtonGroup>           
                }
                <ShowEditButton setEdit={this.setEdit} edit={this.state.edit} />
            </MenuBar>

            <PlayButtonArray 
                audios={this.state.audios}
                edit={this.state.edit} 
                showHotkeys={this.state.showHotkeys} 
                play={this.play} 
                setModal={this.setModal}
                />
            
            <Navigation page={this.state.page} setPage={this.setPage} />
        </div>
}