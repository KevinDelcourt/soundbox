import React, { Component } from 'react'
import { Input } from 'reactstrap';

export default class YoutubeInput extends Component {

    linkFilter = (newValue) => {
        let youtubeVideoCode = newValue
        if(newValue.includes("youtu.be"))//Url ex: https://youtu.be/Dk2Ey6uGhYQ
            youtubeVideoCode = newValue.split("/")[newValue.split("/").length-1]        

        if(newValue.includes("youtube.com/watch"))//Url ex: https://www.youtube.com/watch?v=SX8aGqs5Jyg&t=1051s
            youtubeVideoCode = newValue.split("v=")[1].split("&")[0]
        
        this.props.setCode(youtubeVideoCode)
    }

    render = () => <Input 
        bsSize="lg"
        type="text" 
        placeholder="Paste Youtube url here" 
        value={this.props.youtubeVideoCode} 
        onChange={(evt)=>this.linkFilter(evt.target.value)}
        />
    
}
