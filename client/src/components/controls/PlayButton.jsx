import React, { Component } from 'react'
import {Button} from 'reactstrap'

export default class PlayButton extends Component{

    indexToChar = (index) => "["+String.fromCharCode(65+index)+"]"

    render = () => 
        <Button 
            block
            color='primary' 
            size='lg' 
            onClick={this.props.onClick}
            style={this.props.style?this.props.style:{height: "100%"}}
            >
                {this.props.children}
                {this.props.showHotkeys?<small> {this.indexToChar(this.props.index)}</small>:""}        
        </Button>
}