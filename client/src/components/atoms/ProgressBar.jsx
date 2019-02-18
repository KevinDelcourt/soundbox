import React, { Component } from 'react'

export default class ProgressBar extends Component{

    getHeight = () => this.props.height ? this.props.height : 25
    
    getValue = () => this.props.value ? Math.min(this.props.value+10,100) : 0

    render = () => <div style={{position: "fixed", left:"0", top:"0", width: "100%", height: this.getHeight()+"px", zIndex: "200"}}>
        <div style={{backgroundColor:"red", height: this.getHeight()+"px", width: this.getValue()+"%", borderRadius: ".25rem", transition: "width .1s linear"}} />
    </div>
}