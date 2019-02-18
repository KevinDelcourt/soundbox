import React, { Component } from 'react'
import { Button } from 'reactstrap';

export default class ToggleButton extends Component{

    toggleCheck = () => {
        this.props.setMaster(!this.props.master)
    }

    render(){
        return(
            
            <Button 
                title={this.props.title}
                color={this.props.master?"danger":"primary"}
                size='lg' 
                onClick={this.toggleCheck}
                hidden={this.props.hidden}
                >
                {this.props.children}
            </Button>
        )
    }
}