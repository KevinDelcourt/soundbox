import React, { Component } from 'react'
import {ButtonGroup,Button} from 'reactstrap'
import Context from '../../context'
import PlaylistButton from '../soundbox/PlaylistButton';
import DeletePlaylistButton from '../sound_management/delete_playlist/DeletePlaylistButton';

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
                    <Button>p</Button>
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