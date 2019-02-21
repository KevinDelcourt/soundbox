import React, { Component } from 'react'
import { Button } from 'reactstrap';
import UploadForm from '../form/UploadForm';

export default class UploadFormButton extends Component {
    
    setModal = () => this.props.setModal({
        isOpen: true,
        size: "lg",
        title: "Select files to upload",
        content: <UploadForm play={this.props.play}/>
    })

    render = () =>
        <Button
            color="success"
            title="Upload sounds"
            onClick={this.setModal}
        >
            <i className="fas fa-cloud-upload-alt"></i>
        </Button>

}