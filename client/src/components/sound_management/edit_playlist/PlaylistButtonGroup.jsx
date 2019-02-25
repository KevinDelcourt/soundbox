import React, { Component } from 'react'
import {ButtonGroup} from 'reactstrap'
import PlayButton from '../../controls/PlayButton';
import Context from '../../../context'
import AddRemoveSoundButton from './AddRemoveSoundButton';

export default class PlaylistButtonGroup extends Component {
    static contextType = Context

    render = () => 
        <ButtonGroup size='lg' style={{height: "100%", width: "100%"}}>
            <PlayButton 
                index={this.props.index}
                src={this.props.sound.src}
                >
                {this.props.sound.name}
            </PlayButton>
            <AddRemoveSoundButton isInPlaylist={this.props.isInPlaylist} toggleSound={this.props.toggleSound} sound={this.props.sound}/>
        </ButtonGroup>

}