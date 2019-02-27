import React, {Component} from 'react'
import { Row, Col , Container, ButtonGroup, Alert} from 'reactstrap'
import { getPlaylistSounds } from '../../../modules/axios_functions';
import Context from '../../../context'
import Navigation from '../../soundbox/Navigation';
import PlayButton from '../../controls/PlayButton';
import Grid from '../../utilities/Grid';
import EditPlaylistForm from './EditPlaylistForm';
import AddRemoveSoundButton from './AddRemoveSoundButton';

class EditCol extends Component {
    render = () =>
        <Col  xs="12" lg="6" style={{ marginTop: "1em", height: "4.5em" }}>
            {this.props.children}
        </Col>
}

export default class EditPlaylistPanel extends Component {
    static contextType = Context

    state={
        playlistAudios: [],
        showAlert: false
    }

    componentDidMount = () => {
        getPlaylistSounds(this.context.sb.idPlaylist).then((response)=>{
            this.setState({playlistAudios: response.data})
        }).catch((error)=>console.log(error))
    }

    isInPlaylist = (id) => {
        let included = false
        for(let i = 0; i < this.state.playlistAudios.length; i++)
            included = included || this.state.playlistAudios[i].id === id
        return included
    }

    toggleSound = (sound) => {
        if(this.isInPlaylist(sound.id)){
            for(let i = 0; i < this.state.playlistAudios.length; i++)
                if(this.state.playlistAudios[i].id === sound.id)
                    this.state.playlistAudios.splice(i,1)
        }else{
            if(this.state.playlistAudios.length < 26){
                this.state.playlistAudios.push(sound)
                this.state.playlistAudios.sort(this.compare)
            }else
                this.setState({showAlert: true})
        } 
            
        
        this.context.reload()
    }

    compare = (sound_a,sound_b) => {
        if (sound_a.id < sound_b.id)
            return 1;
        if (sound_a.id > sound_b.id)
            return -1;
        return 0;
    }



    mapAudios = (a,index) => 
        <EditCol key={index}>
            <ButtonGroup size='lg' style={{height: "100%", width: "100%"}}>
                <PlayButton 
                    index={index}
                    src={a.src}
                    >
                    {a.name}
                </PlayButton>
                <AddRemoveSoundButton isInPlaylist={this.isInPlaylist} toggleSound={this.toggleSound} sound={a}/>
            </ButtonGroup>
        </EditCol>

    map = (a,index) => 
        <EditCol key={index}>
            <ButtonGroup size='lg' style={{height: "100%", width: "100%"}}>
                <AddRemoveSoundButton isInPlaylist={this.isInPlaylist} toggleSound={this.toggleSound} sound={a}/>
                <PlayButton 
                    index={index}
                    src={a.src}
                    >
                    {a.name}
                </PlayButton>
            </ButtonGroup>
        </EditCol>

    render = () =>
    <Container>
        <Alert className="mt-2" color="info" isOpen={this.state.showAlert} toggle={()=>this.setState({showAlert: false})}>Error: you can't have more than 26 sounds in a playlist.</Alert>
        <Row>
            <Col sm="6">
                <Grid items={this.props.audios} map={this.mapAudios}><Navigation /></Grid>
            </Col>
            <Col sm="6">
                <Grid items={this.state.playlistAudios} map={this.map} >
                    <EditPlaylistForm audios={this.state.playlistAudios} idPlaylist={this.props.idPlaylist} />
                </Grid>
            </Col>
        </Row>
    </Container>
}