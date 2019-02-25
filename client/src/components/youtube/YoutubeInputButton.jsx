import React, { Component } from 'react'
import YoutubeInput from './YoutubeInput';
import ModalButton from '../utilities/button/ModalButton';


export default class YoutubeInputButton extends Component {
    state={isOpen: false}

    toggleModal = () => this.setState({isOpen: !this.state.isOpen})

    render = () =>
    <ModalButton
        color="primary"
        title="Start a video in the background"
        modal={{
            title: "Paste youtube url below.",
            size: "sm",
            content: <YoutubeInput />
        }}
        >
        <i className="fas fa-music"></i>
    </ModalButton>

}

