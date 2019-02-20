import React, { Component } from 'react'
import { Button } from 'reactstrap';
import EditNameForm from '../form/EditNameForm';

export default class EditNameButton extends Component {

    modal = {
        isOpen: true,
        title: "Edit the name of "+ this.props.sound.name,
        content: <EditNameForm sound={this.props.sound} play={this.props.play}/>
    }

    render = () =>
        <Button
            color="secondary"
            title="Edit the name of this sound."
            onClick={() => this.props.setModal(this.modal)}
        >
            <i className="fas fa-edit"></i>
        </Button>

}