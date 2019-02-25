import React, { Component } from 'react'
import { Input } from 'reactstrap';
import Context from '../../../context'

export default class SearchSoundInput extends Component {
    static contextType = Context

    render = () => <Input 
        bsSize="lg"
        type="text" 
        placeholder="Search..." 
        value={this.context.sb.search} 
        onChange={(evt)=>this.context.setSb({search: evt.target.value})}
        />
    
}
