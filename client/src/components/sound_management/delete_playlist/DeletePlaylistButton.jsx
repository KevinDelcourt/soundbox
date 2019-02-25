import React, { Component } from 'react'
import ModalButton from '../../utilities/button/ModalButton'
import DeletePlaylistForm from './DeletePlaylistForm';

export default class DeletePlaylistButton extends Component {

    render = () =>
        <ModalButton
            color="danger"
            title="Delete this sound."
            modal={{
                title: "Please confirm deletion of "+ this.props.playlist.name,
                content: <DeletePlaylistForm playlist={this.props.playlist}/>
            }}
        >
            <i className="fas fa-trash"></i>
        </ModalButton>

}