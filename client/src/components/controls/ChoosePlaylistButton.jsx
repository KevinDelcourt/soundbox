import React, { Component } from 'react'
import ToggleButton from '../utilities/button/ToggleButton';
import Context from '../../context'

export default class ChoosePlaylistButton extends Component {
    static contextType = Context

    setChoosePlaylist = (boolean) => this.context.setSb({choosePlaylist: boolean})
    render = () => 
    <ToggleButton 
        title={this.context.sb.choosePlaylist ? "Hide playlists":"Show playlists"}
        master={this.context.sb.choosePlaylist} 
        setMaster={this.setChoosePlaylist}
        > 
        <i className="fas fa-bars"></i>
    </ToggleButton>
}
