import React, { Component } from 'react'
import { Button } from 'reactstrap';
import DeleteSoundForm from '../form/DeleteSoundForm';

export default class DeleteSoundButton extends Component {

    modal = {
        isOpen: true,
        title: "Please confirm deletion of "+ this.props.sound.name,
        content: <DeleteSoundForm sound={this.props.sound}/>
    }

    render = () =>
        <Button
            color="danger"
            title="Delete this sound."
            onClick={() => this.props.setModal(this.modal)}
        >
            <i className="fas fa-trash"></i>
        </Button>

}