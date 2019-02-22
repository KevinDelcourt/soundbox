import React, { Component } from 'react'
import UploadForm from './UploadForm'
import ModalButton from '../../utilities/button/ModalButton'

export default class UploadFormButton extends Component {

    render = () =>
        <ModalButton
            color="success"
            title="Upload sounds"
            setModal={this.props.setModal}
            modal={{
                title: "Select files to upload",
                size: "lg",
                content: <UploadForm play={this.props.play}/>
            }}
            onClick={this.setModal}
        >
            <i className="fas fa-cloud-upload-alt"></i>
        </ModalButton>
}