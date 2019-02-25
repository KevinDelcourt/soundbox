import React, { Component } from 'react'
import { getSounds } from '../modules/axios_functions';
import SoundBoxModal from './soundbox/SoundBoxModal';
import PlayButtonArray from './soundbox/PlayButtonArray';
import Navigation from './soundbox/Navigation';
import AudioPlayer from './soundbox/AudioPlayer';
import SoundboxState from '../modules/soundbox_state';
import Menu from './soundbox/Menu';
import Context from '../context'

export default class Soundbox extends Component {

    state = {
        sb: new SoundboxState(),
        page: 0,
        audios: [],
        modal: {
            isOpen: false,
            title: "",
            content: "",
            size: ""
        },
        src: null
    }

    componentWillMount = () => document.addEventListener('keydown', this.handleKeyDown)

    componentDidMount = () => {
        getSounds(this.state.page).then((response) => {
            this.setState({audios: response.data})
        }).catch((error)=>console.log(error))
    }

    play = (src) => this.setState({ src: src }, () => {
            this.ref.player.audioEl.currentTime = 0
            this.ref.player.audioEl.play()
        })

    handleKeyDown = (e) => {
        if (e.which - 65 >= 0 && e.which - 65 < this.state.audios.length && !this.state.sb.edit)
            this.play(this.state.audios[e.which - 65].src)
        if (e.which === 188 && !this.state.sb.edit)
            if(this.state.sb.speed === 1)
                this.setSb(this.state.sb.setSpeed(0.1))
            else
                this.setSb(this.state.sb.setSpeed(1))
    }

    playRandom = () => this.play(this.state.audios[this.randomIndex()].src)
    randomIndex = () => Math.floor(Math.random() * this.state.audios.length)

    setModal = (modal) => this.setState({modal: modal})
    setPage = (page) => this.setState({page: page},()=>this.componentDidMount()) 
    setSb = (obj) => this.setState({sb: obj})

    toggleModal = () => {
        let newModal = this.state.modal
        newModal.isOpen = !this.state.modal.isOpen
        this.setState({modal: newModal})
    }

    onAudioEnded = () => {
        if (this.state.sb.shuffle)
            this.playRandom()
    }
    
    render = () => 
        <Context.Provider value={{setModal: this.setModal, play: this.play}}>            
            <SoundBoxModal 
                modal={this.state.modal} 
                toggleModal={this.toggleModal} 
                onClosed={this.componentDidMount}
                />
            
            <AudioPlayer 
                ref={(ref) => {this.ref = ref}} 
                src={this.state.src}
                onEnded={this.onAudioEnded}
                sb={this.state.sb}
                />

            <Menu 
                sb={this.state.sb}
                setSb={this.setSb}
                />

            <PlayButtonArray 
                audios={this.state.audios}
                edit={this.state.sb.edit} 
                showHotkeys={this.state.sb.hotKeys} 
                />
            
            <Navigation page={this.state.page} setPage={this.setPage} />
        </Context.Provider>
}
