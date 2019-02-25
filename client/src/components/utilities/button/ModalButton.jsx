import React, { Component } from 'react'
import { Button } from 'reactstrap'
import Context from '../../../context'

export default class ModalButton extends Component {
    static contextType = Context
    
    prepareModal = () => this.context.setModal({
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