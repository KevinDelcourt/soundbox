import React, { Component } from 'react'
import { addPlaylist } from '../../../modules/axios_functions';
import BasicForm from '../../utilities/form/BasicForm';
import ControlledInput from '../../utilities/form/ControlledInput';

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
            <ControlledInput 
                placeholder="Playlist name"
                value={this.state.name}
                setValue={this.setName}
                />
        </BasicForm>

}