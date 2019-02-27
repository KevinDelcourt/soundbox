import React, { Component } from 'react'
import { getSounds, getPlaylists, getPlaylistSounds } from '../modules/axios_functions';
import SoundBoxModal from './soundbox/SoundBoxModal';
import PlayButtonArray from './playlist/PlayButtonArray';
import AudioPlayer from './soundbox/AudioPlayer';
import SoundboxState from '../modules/soundbox_state';
import Menu from './soundbox/Menu';
import Context from '../context'
import Youtube from './youtube/Youtube';
import PlaylistArray from './playlist/PlaylistArray';
import EditPlaylistPanel from './sound_management/edit_playlist/EditPlaylistPanel';

export default class Soundbox extends Component {

    state = {
        sb: new SoundboxState(),
        audios: [],
        playlists: [],
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
        this.setSb({loading: true},()=>{
            if(this.state.sb.idPlaylist !== -1 && !this.state.sb.editPlaylist)
                getPlaylistSounds(this.state.sb.idPlaylist).then((response)=>{
                    this.setState({audios: response.data},()=>this.setSb({loading:false}))
                }).catch((error)=>console.log(error))
            else
                getSounds(this.state.sb.page,this.state.sb.search).then((response) => {
                    this.setState({audios: response.data},()=>this.setSb({loading:false}))
                }).catch((error)=>console.log(error))
            getPlaylists().then((response)=>{
                this.setState({playlists: response.data})
            }).catch((error)=>console.log(error))
        })
        
    }

    play = (src) => this.setState({ src: src }, () => {
            this.ref.player.audioEl.currentTime = 0
            this.ref.player.audioEl.play()
        })

    handleKeyDown = (e) => {
        if(this.canHandleKeyDown()){
            if(this.state.sb.choosePlaylist ){
                if(e.which - 65 >= 0 && e.which - 65 < this.state.playlists.length)
                    this.setPlaylist(this.state.playlists[e.which - 65].id)
            }else{
                if (e.which - 65 >= 0 && e.which - 65 < this.state.audios.length)
                    this.play(this.state.audios[e.which - 65].src)
            }
            if (e.which === 188 )
                if(this.state.sb.speed === 1)
                    this.setSb({speed: 0.1})
                else
                    this.setSb({speed: 1})
            if (e.which === 16 )
                this.setSb({choosePlaylist: !this.state.sb.choosePlaylist})
        }
    }

    canHandleKeyDown = () => !this.state.sb.edit && !this.state.modal.isOpen && !this.state.sb.editPlaylist

    playRandom = () => this.play(this.state.audios[this.randomIndex()].src)
    randomIndex = () => Math.floor(Math.random() * this.state.audios.length)

    setPlaylist = (id) => {
        let newId = id
        if(this.state.sb.idPlaylist === id)
            newId = -1
        this.setSb({idPlaylist: newId, choosePlaylist: false},this.componentDidMount)
    }

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
        <Context.Provider value={{setModal: this.setModal, play: this.play, sb: this.state.sb, setSb: this.setSb, reload: this.componentDidMount}}>            
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
            {this.state.sb.editPlaylist?<EditPlaylistPanel audios={this.state.audios} idPlaylist={this.state.sb.idPlaylist}/>:""}
            
            {this.state.sb.choosePlaylist?<PlaylistArray playlists={this.state.playlists} />:""}

            {!this.state.sb.choosePlaylist && !this.state.sb.editPlaylist?<PlayButtonArray audios={this.state.audios}/>:""}
            
        </Context.Provider>
}
