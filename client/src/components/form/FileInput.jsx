import React from 'react'
import { FormGroup, Input, FormText, Col, Row, Card, CardBody, CardHeader } from 'reactstrap';
import PlayButton from '../controls/PlayButton';

export default class FileInput extends React.Component {
    state = {
        value: this.props.file.name.split('.')[0].substring(0,11),
        invalid: false
    }

    setValue = (newValue) => {
        if(newValue.length > 11)
            this.setState({invalid: true})
        else{
            this.setState({invalid: false, value: newValue})
            if(this.props.value)
                this.props.setValue(newValue)
        }
            
    }

    render = () =>
    <Card className="m-1">
        
        {this.props.noTitle? "":<CardHeader>{this.props.file.name}</CardHeader>}
        <CardBody> 
            <Row>
                <Col sm="5" >
                    <FormGroup>
                        <Input 
                            type="text" 
                            name={this.props.id?"name["+this.props.id+"]":"name"} 
                            placeholder="Filename" 
                            value={this.props.value?this.props.value:this.state.value} 
                            onChange={(evt) => this.setValue(evt.target.value)}
                            invalid={this.state.invalid}
                            />
                        <FormText color={this.state.invalid?"danger":"muted"}>
                            11 char max
                        </FormText>
                    </FormGroup>
                </Col>
                <Col sm="7" >
                    <PlayButton onClick={()=>this.props.play(this.props.file.src)}>{this.state.value}</PlayButton>
                </Col>
            </Row>
        </CardBody>
    </Card>
}