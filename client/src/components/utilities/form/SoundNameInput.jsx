import React from 'react'
import { Col, Row, Card, CardBody, CardHeader } from 'reactstrap';
import PlayButton from '../../controls/PlayButton';
import ControlledInput from './ControlledInput';

export default class SoundNameInput extends React.Component {
    render = () =>
    <Card className="m-1">
        {this.props.noTitle? "":<CardHeader>{this.props.file.name}</CardHeader>}
        <CardBody> 
            <Row>
                <Col sm="5" >
                    <ControlledInput 
                        value={this.props.value} 
                        setValue={this.props.setValue}
                        />
                </Col>
                <Col sm="7" >
                    <PlayButton src={this.props.file.src} noEllipsis>{this.props.value}</PlayButton>
                </Col>
            </Row>
        </CardBody>
    </Card>
}