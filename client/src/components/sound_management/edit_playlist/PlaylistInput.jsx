import React, { Component } from 'react'
import { FormGroup, FormText, Input, Button, Form } from 'reactstrap';
import { editPlaylist } from '../../../modules/axios_functions'
import Context from '../../../context'
export default class PlaylistInput extends Component {
    static contextType = Context

    state= {
        invalid: false,
        password: "",
        name: "",
        color: "muted",
        text: ""
    }

    setName = (newValue) => 
        this.setState({invalid: newValue.length > 11},()=>{
            if(!this.state.invalid)
                this.setState({name: newValue})
        }) 
        
    submit = (e) => {
        e.preventDefault()
        let sound = []
        for(let i = 0; i < this.props.audios.length; i++)
            sound.push(this.props.audios[i].id)
        
        editPlaylist({
            password: this.state.password,
            playlist:{
                id: this.context.sb.idPlaylist,
                name: this.state.name
            },
            sound: sound
        }).then((response)=>{
            let res = response.data.split(': ')
                if(res[0] === 'error')
                    this.setState({color: "danger", text: response.data})
                else{
                    this.setState({color: "success", text: response.data})
                    this.context.setSb({editPlaylist: false},this.context.reload)
                }
        }).catch((error)=>console.log(error))
    }

    render = () =>
    <Form className="mt-2" onSubmit={this.submit}>
        <FormGroup>
            <Input 
                type="text" 
                placeholder="Playlist name" 
                value={this.state.name} 
                onChange={(evt) => this.setName(evt.target.value)}
                invalid={this.state.invalid}
                />
            <FormText color={this.state.invalid?"danger":"muted"}>
                11 char max
            </FormText>
        </FormGroup>
        <FormGroup>
            <Input type="password" placeholder="password" value={this.state.password} onChange={(evt)=>this.setState({password: evt.target.value})}/>
        </FormGroup>
        <Button color="primary" size="lg">Save Playlist</Button>
        <Button color="danger" size="lg" onClick={()=>this.context.setSb({editPlaylist: false},this.context.reload)}>Cancel changes</Button>
        <FormText color={this.state.color}>{this.state.text}</FormText>
    </Form>
            

}