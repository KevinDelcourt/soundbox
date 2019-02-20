import React, { Component } from 'react'
import { Button, Form, FormGroup, FormText, Input } from 'reactstrap';
import FileInput from '../form/FileInput';
import { updateSoundName } from '../../modules/axios_functions';

export default class EditNameForm extends Component {
    state={
        name: this.props.sound.name.split('.')[0].substring(0,11),
        password:"",
        feedback: {
            color: "muted",
            text: ""
        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        updateSoundName({id: this.props.sound.id, name: this.state.name, password: this.state.password})
        .then((response)=>{
            let res = response.data.split(': ')
            if(res[0] === 'error')
                this.setState({feedback: {color: "danger", text: response.data}})
            else
                this.setState({feedback: {color: "success", text: response.data}})
        }).catch((error)=>console.log(error))
    }

    render = () =>
        <Form onSubmit={this.onSubmit}>
            <FileInput play={this.props.play} file={this.props.sound} value={this.state.name} setValue={(value)=>this.setState({name: value})} noTitle/>
            <FormGroup>
                <Input type="password" placeholder="password" value={this.state.password} onChange={(evt)=>this.setState({password: evt.target.value})}/>
            </FormGroup>
            <Button color="primary">Edit name</Button>
            <FormText color={this.state.feedback.color}>{this.state.feedback.text}</FormText>
        </Form>

}