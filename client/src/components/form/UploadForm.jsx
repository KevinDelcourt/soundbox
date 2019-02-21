import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';
import { getBaseUrl } from '../../modules/axios_functions'
import FileInput from './FileInput';
import { uploadSounds }  from '../../modules/axios_functions'
import BasicForm from '../atoms/BasicForm'

export default class UploadForm extends React.Component {

    state = {
        files: [],
        names: [],
        password: "",
        invalid: false
    }

    setName = (index,name) => {
        let names = this.state.names
        names[index] = name
        this.setState({names: names})
    }

    fileDrop = (evt) => {
        this.setState({invalid: false})
        let files = [],names = []
        for(let i = 0; i < evt.target.files.length; i++){
            if(evt.target.files[i].type !== "audio/mp3" || evt.target.files[i].size >= 16000000)
                this.setState({invalid: true})
            else{
                files.push({
                    obj: evt.target.files[i],
                    src: URL.createObjectURL(evt.target.files[i]),
                    name: evt.target.files[i].name
                })
                names.push(evt.target.files[i].name.split('.')[0].substring(0,11))
            }
        }         
        this.setState({files: files, names: names})
    }

    getFormData = () => {
        let formData = new FormData()

        formData.append('password',this.state.password)
        this.state.files.map((f,index)=>formData.append('file['+index+']',f.obj))
        this.state.names.map((n,index)=>formData.append('name['+index+']',n))

        return formData
    }
    reset = () => this.setState({files: [], names: []})
    

    render = () => 
        <BasicForm
            button={{color: "success", text: "Upload files"}}
            password={this.state.password}
            setPassword={(password)=>this.setState({password: password})}
            axiosFunction={()=>uploadSounds(this.getFormData())}
            onSuccess={this.reset}
            >
            {this.state.files.map((f,index)=>
                <FileInput id={index} key={index} file={f} play={this.props.play} value={this.state.names[index]} setValue={(name)=>this.setName(index,name)} />
            )}

            <FormGroup>
                <Input invalid={this.state.invalid} type="file" multiple onChange={this.fileDrop}/>
                <FormText>mp3 only, 15mb max per file.</FormText>
                <FormFeedback>One or more files were not mp3 or were too big.</FormFeedback>
            </FormGroup>   

        </BasicForm>

}