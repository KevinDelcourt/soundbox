import React, { Component } from 'react'
import { Input } from 'reactstrap'
import { addPlaylist } from '../../../modules/axios_functions';
import BasicForm from '../../utilities/form/BasicForm';

export default class AddPlaylistForm extends Component {
    state={
        name: "",
        password:""
    }

    setName = (name) => this.setState({name: name})
    
    render = () =>
        <BasicForm
            button={{color: "primary", text: "Add a playlist"}}
            axiosFunction={()=>addPlaylist({name: this.state.name, password: this.state.password})}
            password={this.state.password}
            setPassword={(password)=>this.setState({password: password})}
            >
            <Input 
                type="text"
                value={this.state.name}
                onChange={(evt)=>this.setName(evt.target.value)}
                />
        </BasicForm>

}