import React, { Component } from 'react'
import {ButtonGroup} from 'reactstrap'
import PlayButton from './PlayButton';
import EditNameButton from '../sound_management/edit_sound_name/EditNameButton';
import DeleteSoundButton from '../sound_management/delete_sound/DeleteSoundButton';
import Context from '../../context'

export default class PlayButtonGroup extends Component {
    static contextType = Context

    render = () => {
        if(this.context.sb.edit)
            return(
                <ButtonGroup size='lg' style={{height: "100%", width: "100%"}}>
                    <PlayButton 
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
                    index={this.props.index}
                    src={this.props.sound.src}
                    >
                    {this.props.sound.name}
                </PlayButton>
            )
    }
}