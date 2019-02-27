import React from 'react'
import { FormGroup, Input, FormText, Col, Row, Card, CardBody, CardHeader } from 'reactstrap';
import PlayButton from '../../controls/PlayButton';

export default class NameInput extends React.Component {
    state = {
        invalid: false
    }

    setValue = (newValue) => 
        this.setState({invalid: newValue.length > 11},()=>{
            if(!this.state.invalid)
                this.props.setValue(newValue)
        })  

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
                            placeholder="Sound name" 
                            value={this.props.value} 
                            onChange={(evt) => this.setValue(evt.target.value)}
                            invalid={this.state.invalid}
                            />
                        <FormText color={this.state.invalid?"danger":"muted"}>
                            11 char max
                        </FormText>
                    </FormGroup>
                </Col>
                <Col sm="7" >
                    <PlayButton src={this.props.file.src} noEllipsis>{this.props.value}</PlayButton>
                </Col>
            </Row>
        </CardBody>
    </Card>
}