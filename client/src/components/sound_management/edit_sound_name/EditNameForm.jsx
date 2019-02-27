import React, { Component } from 'react'
import NameInput from '../../utilities/form/SoundNameInput';
import { updateSoundName } from '../../../modules/axios_functions';
import BasicForm from '../../utilities/form/BasicForm';

export default class EditNameForm extends Component {
    state={
        name: this.props.sound.name.split('.')[0].substring(0,11),
        password:""
    }

    setName = (name) => this.setState({name: name})
    
    render = () =>
        <BasicForm
            button={{color: "primary", text: "Edit name"}}
            axiosFunction={()=>updateSoundName({id: this.props.sound.id, name: this.state.name, password: this.state.password})}
            password={this.state.password}
            setPassword={(password)=>this.setState({password: password})}
            >
            <NameInput play={this.props.play} file={this.props.sound} value={this.state.name} setValue={this.setName} noTitle/>
        </BasicForm>

}