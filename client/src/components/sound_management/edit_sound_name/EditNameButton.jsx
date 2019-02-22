import React, { Component } from 'react'
import EditNameForm from './EditNameForm'
import ModalButton from '../../utilities/button/ModalButton'

export default class EditNameButton extends Component {

    render = () =>
        <ModalButton
            color="secondary"
            title="Edit the name of this sound."
            setModal={this.props.setModal}
            modal={{
                title: "Edit the name of "+ this.props.sound.name,
                content: <EditNameForm sound={this.props.sound} play={this.props.play}/>
            }}
        >
            <i className="fas fa-edit"></i>
        </ModalButton>
}