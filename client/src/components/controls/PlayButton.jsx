import React, { Component } from 'react'
import {Button} from 'reactstrap'
import Context from '../../context'

export default class PlayButton extends Component{
    static contextType = Context

    indexToChar = (index) => "["+String.fromCharCode(65+index)+"]"

    render = () => 
        <Button 
            block
            color='primary' 
            size='lg' 
            onClick={()=>this.context.play(this.props.src)}
            style={this.props.style?this.props.style:{height: "100%"}}
            >
                {this.props.children}
                {this.context.sb.hotKeys?<small> {this.indexToChar(this.props.index)}</small>:""}        
        </Button>
}