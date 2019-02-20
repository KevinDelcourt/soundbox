import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class SoundBoxModal extends Component {
    render = () =>
        <Modal isOpen={this.props.modal} toggle={this.props.toggleModal}>
            <ModalHeader toggle={this.props.toggleModal}>{this.props.title}</ModalHeader>
            <ModalBody>
                {this.props.children}
            </ModalBody>
        </Modal>
}