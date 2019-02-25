import React, { Component } from 'react'
import ModalButton from '../../utilities/button/ModalButton'
import AddPlaylistForm from './AddPlaylistForm';

export default class AddPlaylistButton extends Component {

    render = () =>
        <ModalButton
            color="success"
            title="Add an empty playlist"
            modal={{
                title: "Enter the name of the playlist ",
                content: <AddPlaylistForm />
            }}
        >
            <i className="fas fa-plus"></i>
        </ModalButton>
}