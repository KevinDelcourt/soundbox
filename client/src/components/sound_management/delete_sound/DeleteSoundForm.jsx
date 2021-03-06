import React, { Component } from 'react'
import { deleteSound } from '../../../modules/axios_functions';
import BasicForm from '../../utilities/form/BasicForm';

export default class DeleteSoundForm extends Component {
    state={ password:"" }

    render = () =>
        <BasicForm
            button={{color: "danger", text: "Delete sound"}}
            axiosFunction={()=>deleteSound({id: this.props.sound.id, password: this.state.password})}
            password={this.state.password}
            setPassword={(password)=>this.setState({password: password})}
            />
}