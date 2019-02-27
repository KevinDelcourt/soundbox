import React, { Component } from 'react'
import { Button  } from 'reactstrap';
import { editPlaylist, getPlaylistName } from '../../../modules/axios_functions'
import Context from '../../../context'
import BasicForm from '../../utilities/form/BasicForm';
import ControlledInput from '../../utilities/form/ControlledInput';
export default class EditPlaylistForm extends Component {
    static contextType = Context

    state= {
        password: "",
        name: "",
        color: "muted",
        text: ""
    }

    componentDidMount = () => {
        getPlaylistName(this.context.sb.idPlaylist).then((response)=>{
            this.setName(response.data.name)
        }).catch((error)=>console.log(error))
    }

    setName = (newValue) => this.setState({name: newValue})
    
    getSubmitData = () => {
        let sound = []
        for(let i = 0; i < this.props.audios.length; i++)
            sound.push(this.props.audios[i].id)

        return {
            password: this.state.password,
            playlist:{
                id: this.context.sb.idPlaylist,
                name: this.state.name
            },
            sound: sound
        }
    }

    render = () =>
    <div className="mt-2">
        <BasicForm
            button={{color: "success", text: "Edit playlist"}}
            password={this.state.password}
            setPassword={(password)=>this.setState({password: password})}
            axiosFunction={()=>editPlaylist(this.getSubmitData())}
            onSuccess={()=>this.context.setSb({editPlaylist: false},this.context.reload)}
            otherButton={<Button className="ml-2" color="danger" onClick={()=>this.context.setSb({editPlaylist: false},this.context.reload)}>Cancel changes</Button>}
            >
            <ControlledInput 
                placeholder="Playlist name" 
                value={this.state.name} 
                setValue={this.setName}
                />
            
        </BasicForm>
    </div>
    
}


