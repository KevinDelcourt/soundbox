import React, { Component } from 'react'
import Context from '../../context'
import ReactEllipsis from 'react-ellipsis-text'

export default class Ellipsis extends Component{
    static contextType = Context

    getMaxLength = () => {
        if(this.context.sb.edit)
            return 6
        if(this.context.sb.editPlaylist)
            return 9
        return 11
    }

    render = () => 
        <ReactEllipsis 
            text={this.props.children} 
            length={this.getMaxLength()}
            /> 

}