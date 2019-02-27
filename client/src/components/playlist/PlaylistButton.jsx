import React, { Component } from 'react'
import {Button} from 'reactstrap'
import Context from '../../context'
import Ellipsis from '../utilities/Ellipsis';

export default class PlaylistButton extends Component{
    static contextType = Context

    indexToChar = (index) => "["+String.fromCharCode(65+index)+"]"

    setPlaylist = (id) => {
        let newId = id
        if(this.context.sb.idPlaylist === id)
            newId = -1
        this.context.setSb({idPlaylist: newId, choosePlaylist: false},this.context.reload)
    }

    render = () => 
        <Button 
            block
            title={this.context.sb.idPlaylist === this.props.playlist.id?"Unload this playlist":"Load this playlist"}
            color={this.context.sb.idPlaylist === this.props.playlist.id?"info":"success"}
            size='lg' 
            onClick={()=>this.setPlaylist(this.props.playlist.id)}
            style={{height: "100%",opacity: "0.9"}}
            >
                <Ellipsis>{this.props.playlist.name}</Ellipsis>
                {this.context.sb.hotKeys?<small> {this.indexToChar(this.props.index)}</small>:""}        
        </Button>
}