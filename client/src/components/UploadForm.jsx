import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, FormFeedback } from 'reactstrap';
import { getBaseUrl } from '../modules/axios_functions'
import FileInput from './form/FileInput';
import ReactAudioPlayer from 'react-audio-player'

export default class UploadForm extends React.Component {

    state = {
        files: [],
        src:"",
        invalid: false
    }

    rap
    url = getBaseUrl()

    play = (src) => {
        this.setState({ src: src }, () => {
            this.rap.audioEl.currentTime = 0
            this.rap.audioEl.play()
        })
    }

    fileDrop = (evt) => {
        console.log(evt.target.files)
        this.setState({invalid: false})
        let files = []
        for(let i = 0; i < evt.target.files.length; i++){
            if(evt.target.files[i].type !== "audio/mp3" || evt.target.files[i].size >= 16000000)
                this.setState({invalid: true})
            else
                files.push({
                    src: URL.createObjectURL(evt.target.files[i]),
                    name: evt.target.files[i].name
                })
            
            
        }         
        this.setState({files: files})
    }

    render = () => 
        <Container>
            <ReactAudioPlayer
                    src={this.state.src}
                    ref={(element) => { this.rap = element }}
                />

            <Form action={this.url+"add_sound.php"} method="post" encType="multipart/form-data" multipart="">
                
                {this.state.files.map((f,index)=>
                    <FileInput id={index} key={index} file={f} play={this.play} />
                )}

                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input name="password" type="password" />
                </FormGroup>

                <FormGroup>
                    <Label for="file">Select one or more files to upload</Label>
                    <Input name={"file[]"} invalid={this.state.invalid} type="file"  multiple onChange={this.fileDrop}/>
                    <FormText>mp3 only, 15mb max per file.</FormText>
                    <FormFeedback>One or more files were not mp3 or too big.</FormFeedback>
                </FormGroup>   
                
                <Button color="primary" size="lg" type="submit">Upload</Button>
            </Form>
        </Container>
}