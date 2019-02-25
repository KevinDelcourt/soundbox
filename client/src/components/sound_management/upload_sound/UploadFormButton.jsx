import React, { Component } from 'react'
import UploadForm from './UploadForm'
import ModalButton from '../../utilities/button/ModalButton'

export default class UploadFormButton extends Component {

    render = () =>
        <ModalButton
            color="success"
            title="Upload sounds"
            modal={{
                title: "Select files to upload",
                size: "lg",
                content: <UploadForm play={this.props.play}/>
            }}
        >
            <i className="fas fa-cloud-upload-alt"></i>
        </ModalButton>
}