import React, { Component } from 'react'
import {Button} from 'reactstrap'
import Context from '../../context'
import Ellipsis from '../utilities/Ellipsis';

export default class PlayButton extends Component{
    static contextType = Context

    indexToChar = (index) => "["+String.fromCharCode(65+index)+"]"

    render = () => 
        <Button 
            block
            color='primary' 
            size='lg' 
            onClick={()=>this.context.play(this.props.src)}
            style={{height: "100%",opacity: "0.9"}}
            >
                <Ellipsis noEllipsis={this.props.noEllipsis}>{this.props.children}</Ellipsis> 
                
                {this.context.sb.hotKeys?<small> {this.indexToChar(this.props.index)}</small>:""}        
        </Button>
}