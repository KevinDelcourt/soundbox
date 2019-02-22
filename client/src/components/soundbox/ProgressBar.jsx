import React, { Component } from 'react'

export default class ProgressBar extends Component{
    getValue = () => this.props.value ? Math.min(this.props.value+10,100) : 0

    render = () => <div style={{position: "fixed", left:"0", top:"0", width: "100%", height: "3px", zIndex: "200"}}>
        <div style={{backgroundColor:"red", height: "3px", width: this.getValue()+"%", borderRadius: ".25rem", transition: "width .1s linear"}} />
    </div>
}