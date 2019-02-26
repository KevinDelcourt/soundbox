import React, { Component } from 'react'
import {Button} from 'reactstrap'

export default class AddRemoveSoundButton extends Component {

    render = () =>
        <Button
            color={this.props.isInPlaylist(this.props.sound.id)?"danger":"success"}
            title="Add or Remove this sound"
            onClick={()=>this.props.toggleSound(this.props.sound)}
        >
            {this.props.isInPlaylist(this.props.sound.id)?<i className="fas fa-minus"></i>:<i className="fas fa-plus"></i>}
        </Button>

}