import React, { Component } from 'react'
import { getSounds } from '../modules/axios_functions';
import SoundBoxModal from './soundbox/SoundBoxModal';
import PlayButtonArray from './soundbox/PlayButtonArray';
import Navigation from './soundbox/Navigation';
import AudioPlayer from './soundbox/AudioPlayer';
import SoundboxState from '../modules/soundbox_state';
import Menu from './soundbox/Menu';
import Context from '../context'
import Youtube from './youtube/Youtube';

export default class Soundbox extends Component {

    state = {
        sb: new SoundboxState(),
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
        getSounds(this.state.sb.page,this.state.sb.search).then((response) => {
            this.setState({audios: response.data})
        }).catch((error)=>console.log(error))
    }


    play = (src) => this.setState({ src: src }, () => {
            this.ref.player.audioEl.currentTime = 0
            this.ref.player.audioEl.play()
        })

    handleKeyDown = (e) => {
        if(this.canHandleKeyDown()){
            if (e.which - 65 >= 0 && e.which - 65 < this.state.audios.length)
                this.play(this.state.audios[e.which - 65].src)
            if (e.which === 188 )
                if(this.state.sb.speed === 1)
                    this.setSb({speed: 0.1})
                else
                    this.setSb({speed: 1})
        }
    }

    canHandleKeyDown = () => !this.state.sb.edit && !this.state.modal.isOpen

    playRandom = () => this.play(this.state.audios[this.randomIndex()].src)
    randomIndex = () => Math.floor(Math.random() * this.state.audios.length)

    setModal = (modal) => this.setState({modal: modal})
    setSb = (json,callback) => this.setState({sb: this.state.sb.set(json)},callback)

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
        <Context.Provider value={{setModal: this.setModal, play: this.play, sb: this.state.sb, setSb: this.setSb}}>            
            <SoundBoxModal 
                modal={this.state.modal} 
                toggleModal={this.toggleModal} 
                onClosed={this.componentDidMount}
                />
            
            <AudioPlayer 
                ref={(ref) => {this.ref = ref}} 
                src={this.state.src}
                onEnded={this.onAudioEnded}
                />

            <Youtube />
            <Menu />

            <PlayButtonArray audios={this.state.audios}/>
            
            <Navigation reload={this.componentDidMount}/>
        </Context.Provider>
}
