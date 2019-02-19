import React from 'react';
import { getSounds } from './modules/axios_functions';
import Soundbox from './components/Soundbox';

export class Main extends React.Component {
    state = { audios: []}

    componentDidMount = () => {
        getSounds().then((response)=>{
            this.setState({audios: response.data})
        }).catch((error)=>{
            console.log(error)
        })
    }

    render = () => <Soundbox audios={this.state.audios} />
}
