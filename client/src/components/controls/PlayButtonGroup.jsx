import React, { Component } from 'react'
import {ButtonGroup} from 'reactstrap'
import PlayButton from './PlayButton';
import EditNameButton from '../sound_management/edit_sound_name/EditNameButton';
import DeleteSoundButton from '../sound_management/delete_sound/DeleteSoundButton';

export default class PlayButtonGroup extends Component {

    render = () => {
        if(this.props.edit)
            return(
                <ButtonGroup size='lg' style={{height: "100%", width: "100%"}}>
                    <PlayButton 
                        showHotkeys={this.props.showHotkeys} 
                        index={this.props.index}
                        src={this.props.sound.src}
                        >
                        {this.props.sound.name}
                    </PlayButton>
                    <EditNameButton sound={this.props.sound} />
                    <DeleteSoundButton sound={this.props.sound} />
                </ButtonGroup>
            )
        else
            return(
                <PlayButton 
                    showHotkeys={this.props.showHotkeys} 
                    index={this.props.index}
                    src={this.props.sound.src}
                    >
                    {this.props.sound.name}
                </PlayButton>
            )
    }
}