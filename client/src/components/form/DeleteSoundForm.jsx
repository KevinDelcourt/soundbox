import React, { Component } from 'react'
import { Button, Form, FormGroup, FormText, Input } from 'reactstrap';
import { deleteSound } from '../../modules/axios_functions';

export default class DeleteSoundForm extends Component {
    state={
        password:"",
        feedback: {
            color: "muted",
            text: ""
        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        deleteSound({id: this.props.sound.id, password: this.state.password})
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
            <FormGroup>
                <Input type="password" placeholder="password" value={this.state.password} onChange={(evt)=>this.setState({password: evt.target.value})}/>
            </FormGroup>
            <Button color="danger">Delete sound</Button>
            <FormText color={this.state.feedback.color}>{this.state.feedback.text}</FormText>
        </Form>

}