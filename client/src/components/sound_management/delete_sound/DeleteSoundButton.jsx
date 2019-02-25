import React, { Component } from 'react'
import DeleteSoundForm from './DeleteSoundForm'
import ModalButton from '../../utilities/button/ModalButton'

export default class DeleteSoundButton extends Component {

    render = () =>
        <ModalButton
            color="danger"
            title="Delete this sound."
            modal={{
                title: "Please confirm deletion of "+ this.props.sound.name,
                content: <DeleteSoundForm sound={this.props.sound}/>
            }}
        >
            <i className="fas fa-trash"></i>
        </ModalButton>

}