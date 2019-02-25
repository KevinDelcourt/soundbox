import React, { Component } from 'react'
import { deletePlaylist } from '../../../modules/axios_functions';
import BasicForm from '../../utilities/form/BasicForm';

export default class DeletePlaylistForm extends Component {
    state={ password:"" }

    render = () =>
        <BasicForm
            button={{color: "danger", text: "Delete playlist"}}
            axiosFunction={()=>deletePlaylist({id: this.props.playlist.id, password: this.state.password})}
            password={this.state.password}
            setPassword={(password)=>this.setState({password: password})}
            />
}