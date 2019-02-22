import React, { Component } from 'react'
import { Button } from 'reactstrap';
import YoutubeModal from './YoutubeModal';


export default class YoutubeInputButton extends Component {
    state={isOpen: false}

    toggleModal = () => this.setState({isOpen: !this.state.isOpen})

    render = () =>
        <Button
            color="primary"
            title="Start a video in the background"
            onClick={this.toggleModal}
        >
            <i className="fas fa-music"></i>
            <YoutubeModal isOpen={this.state.isOpen} toggleModal={this.toggleModal} youtubeVideoCode={this.props.youtubeVideoCode} setCode={this.props.setCode} />
        </Button>

}