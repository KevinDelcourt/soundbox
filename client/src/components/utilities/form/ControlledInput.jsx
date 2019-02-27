import React from 'react'
import { FormGroup, Input, FormText } from 'reactstrap';

class ControlledInput extends React.Component {
    
    state = {
        invalid: false
    }

    setValue = (newValue) => 
        this.setState({invalid: newValue.length > 11},()=>{
            if(!this.state.invalid)
                this.props.setValue(newValue)
        })  

    render = () =>
        <FormGroup>
            <Input 
                type="text" 
                placeholder={this.props.placeholder}
                value={this.props.value} 
                onChange={(evt) => this.setValue(evt.target.value)}
                invalid={this.state.invalid}
                />
            <FormText color={this.state.invalid?"danger":"muted"}>
                11 char max
            </FormText>
        </FormGroup>

}

ControlledInput.defaultProps = {
    placeholder: "Sound name"
}

export default ControlledInput