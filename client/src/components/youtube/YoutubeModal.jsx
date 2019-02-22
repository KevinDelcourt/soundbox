import React, { Component } from 'react'
import SoundBoxModal from '../soundbox/SoundBoxModal';
import YoutubeInput from './YoutubeInput';

export default class YoutubeModal extends Component {


    render = () =>
    <SoundBoxModal 
        toggleModal={this.props.toggleModal}
        modal={{
                size:"sm", 
                title:"Find a youtube video and paste it here",
                content:<YoutubeInput youtubeVideoCode={this.props.youtubeVideoCode} setCode={this.props.setCode}/>,
                isOpen:this.props.isOpen
            }}
        />
}