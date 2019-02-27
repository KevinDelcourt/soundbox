import React, { Component } from 'react'
import {ButtonGroup} from 'reactstrap'
import Context from '../../context'
import PlaylistButton from './PlaylistButton';
import DeletePlaylistButton from '../sound_management/delete_playlist/DeletePlaylistButton';
import EditPlaylistButton from '../sound_management/edit_playlist/EditPlaylistButton';

export default class ChoosePlaylistButtonGroup extends Component {
    static contextType = Context

    render = () => {
        if(this.context.sb.edit)
            return(
                <ButtonGroup size='lg' style={{height: "100%", width: "100%"}}>
                    <PlaylistButton 
                        index={this.props.index}
                        playlist={this.props.playlist}
                        />
                    <EditPlaylistButton playlist={this.props.playlist} />
                    <DeletePlaylistButton playlist={this.props.playlist}/>
                </ButtonGroup>
            )
        else
            return(
                <PlaylistButton 
                    index={this.props.index}
                    playlist={this.props.playlist}
                    />
            )
    }
}