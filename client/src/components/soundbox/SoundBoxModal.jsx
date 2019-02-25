import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody  } from 'reactstrap';
export default class SoundBoxModal extends Component {
    render = () =>
        <Modal 
            isOpen={this.props.modal.isOpen} 
            toggle={this.props.toggleModal} 
            onClosed={this.props.onClosed} 
            size={this.props.modal.size}
            >
            <ModalHeader toggle={this.props.toggleModal}>{this.props.modal.title}</ModalHeader>
            <ModalBody>
                {this.props.modal.content}
            </ModalBody>
        </Modal>
}