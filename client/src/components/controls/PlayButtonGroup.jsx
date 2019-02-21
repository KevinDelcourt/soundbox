import React, { Component } from 'react'
import {ButtonGroup} from 'reactstrap'
import PlayButton from './PlayButton';
import EditNameButton from './EditNameButton';
import DeleteSoundButton from './DeleteSoundButton';

export default class PlayButtonGroup extends Component {

    render = () => {
        if(this.props.edit)
            return(
                <ButtonGroup size='lg' style={{height: "100%", width: "100%"}}>
                    <PlayButton 
                        showHotkeys={this.props.showHotkeys} 
                        index={this.props.index}
                        onClick={() => this.props.play(this.props.sound.src)}
                        >
                        {this.props.sound.name}
                    </PlayButton>
                    <EditNameButton sound={this.props.sound} setModal={this.props.setModal} play={this.props.play}/>
                    <DeleteSoundButton sound={this.props.sound} setModal={this.props.setModal}/>
                </ButtonGroup>
            )
        else
            return(
                <PlayButton 
                    showHotkeys={this.props.showHotkeys} 
                    index={this.props.index}
                    onClick={() => this.props.play(this.props.sound.src)}
                    >
                    {this.props.sound.name}
                </PlayButton>
            )
    }
}