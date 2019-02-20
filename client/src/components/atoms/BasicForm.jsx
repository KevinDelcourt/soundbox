import React, { Component } from 'react'
import { Button, Form, FormGroup, FormText, Input } from 'reactstrap';

export default class BasicForm extends Component {
    state={
        color: "muted",
        text: ""
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.axiosFunction()
        .then((response)=>{
            let res = response.data.split(': ')
            if(res[0] === 'error')
                this.setState({color: "danger", text: response.data})
            else
                this.setState({color: "success", text: response.data})
        }).catch((error)=>console.log(error))
    }

    render = () =>
        <Form onSubmit={this.onSubmit}>
            {this.props.children}
            <FormGroup>
                <Input type="password" placeholder="password" value={this.props.password} onChange={(evt)=>this.props.setPassword(evt.target.value)}/>
            </FormGroup>
            <Button color={this.props.button.color}>{this.props.button.text}</Button>
            <FormText color={this.state.color}>{this.state.text}</FormText>
        </Form>

}