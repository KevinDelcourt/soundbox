import React, { Component } from 'react'
import { Button } from 'reactstrap'
import Context from '../../../context'

export default class EditPlaylistButton extends Component{
    static contextType = Context

    onClick = () => this.context.setSb({editPlaylist: true, idPlaylist: this.props.playlist.id, choosePlaylist: false, edit: false},this.context.reload)

    render = () => 
        <Button 
            color="secondary"
            title="Edit this playlist"
            onClick={this.onClick}
            >
            <i className="fas fa-edit"></i>
        </Button>
        
    
}