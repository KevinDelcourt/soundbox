import React, { Component } from 'react'
import { ButtonGroup } from 'reactstrap'

import MenuBar from './MenuBar';
import Volume from '../controls/Volume';
import Speed from '../controls/Speed';
import ShowEditButton from '../controls/ShowEditButton';
import UploadFormButton from '../sound_management/upload_sound/UploadFormButton';
import LoopButton from '../controls/LoopButton';
import ShuffleButton from '../controls/ShuffleButton';
import HotkeyButton from '../controls/HotkeyButton';
import YoutubeInputButton from '../youtube/YoutubeInputButton';

export default class Menu extends Component {

    setVolume = (value) => this.props.setSb(this.props.sb.setVolume(value))
    setSpeed = (value) => this.props.setSb(this.props.sb.setSpeed(value))
    setEdit = (boolean) => this.props.setSb(this.props.sb.setEdit(boolean))
    setLoop = (boolean) => this.props.setSb(this.props.sb.setLoop(boolean))
    setShuffle = (boolean) => this.props.setSb(this.props.sb.setShuffle(boolean))
    setHotKeys = (boolean) => this.props.setSb(this.props.sb.setHotKeys(boolean))
    setCode = (value) => this.props.setSb(this.props.sb.setCode(value))

    render = () => {
        let iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)

        let brand = <Volume volume={this.props.sb.volume} setVolume={this.setVolume} />
        let speed = <Speed speed={this.props.sb.speed} setSpeed={this.setSpeed} />
        if(iOS){
            brand = speed
            speed = ""
        }
        return(
            <MenuBar brand={brand}>
                {speed}
                {this.props.sb.edit?
                    <ButtonGroup size="lg">
                        <UploadFormButton setModal={this.props.setModal} play={this.props.play}/>
                    </ButtonGroup>
                    :
                    <ButtonGroup size="lg">
                        <LoopButton setLoop={this.setLoop} loop={this.props.sb.loop} />
                        <ShuffleButton setShuffle={this.setShuffle} shuffle={this.props.sb.shuffle} />
                        <HotkeyButton setShowHotkeys={this.setHotKeys} showHotkeys={this.props.sb.hotKeys} />
                        <YoutubeInputButton youtubeVideoCode={this.props.sb.youtubeVideoCode} setCode={this.setCode} setModal={this.props.setModal}/>
                    </ButtonGroup>           
                }
                <ShowEditButton edit={this.props.sb.edit} setEdit={this.setEdit} />
            </MenuBar>
        )
    }
        
}