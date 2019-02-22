import React, { Component } from 'react'
import { Button } from 'reactstrap'

export default class ModalButton extends Component {

    prepareModal = () => this.props.setModal({
        isOpen: true,
        title: this.props.modal.title,
        size: this.props.modal.size,
        content: this.props.modal.content
    })

    render = () => 
        <Button 
            color={this.props.color}
            title={this.props.title}
            onClick={this.prepareModal}
            >
            {this.props.children}
        </Button>
}