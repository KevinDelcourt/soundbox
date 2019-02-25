import React, { Component } from 'react'
import { ButtonGroup } from 'reactstrap'

import MenuBar from '../utilities/MenuBar';
import Volume from '../controls/Volume';
import Speed from '../controls/Speed';
import ShowEditButton from '../controls/ShowEditButton';
import UploadFormButton from '../sound_management/upload_sound/UploadFormButton';
import LoopButton from '../controls/LoopButton';
import ShuffleButton from '../controls/ShuffleButton';
import HotkeyButton from '../controls/HotkeyButton';
import YoutubeInputButton from '../youtube/YoutubeInputButton';
import SearchSoundButton from '../sound_management/search_sound/SearchSoundButton';
import Context from '../../context'
import ChoosePlaylistButton from '../controls/ChoosePlaylistButton';

export default class Menu extends Component {
    static contextType = Context

    render = () => {
        let iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)

        let brand = <Volume />
        let speed = <Speed />
        if(iOS){
            brand = speed
            speed = ""
        }
        return(
            <MenuBar brand={brand}>
                {speed}
                {this.context.sb.edit?
                    <ButtonGroup size="lg">
                        <UploadFormButton />
                    </ButtonGroup>
                    :
                    <ButtonGroup size="lg">
                        <LoopButton />
                        <ShuffleButton />
                        <HotkeyButton />
                        <YoutubeInputButton />
                        
                    </ButtonGroup>           
                }
                <ButtonGroup>
                    {this.context.sb.idPlaylist === -1?<SearchSoundButton />:""}
                    <ChoosePlaylistButton />
                </ButtonGroup>
                <ShowEditButton />
            </MenuBar>
        )
    }
        
}