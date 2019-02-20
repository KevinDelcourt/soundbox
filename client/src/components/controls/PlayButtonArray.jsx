import React, { Component } from 'react'
import { Container, Row, Col, ButtonGroup, Alert } from 'reactstrap'
import PlayButtonGroup from '../controls/PlayButtonGroup';

export default class PlayButtonArray extends Component {

    render = () => 
    <Container>
        <Row>
            {this.props.audios.length > 0 ? this.props.audios.map((a, index) =>
                <Col key={index} xs="12" sm="6" md="4" lg="3" style={{ marginTop: "1em", height: "4.5em" }}>
                    <PlayButtonGroup 
                        edit={this.props.edit} 
                        showHotkeys={this.props.showHotkeys} 
                        index={index} 
                        play={this.props.play} 
                        sound={a} 
                        setModal={this.props.setModal}
                        />
                </Col>
            ):<Alert color="warning">No sounds loaded</Alert>}
        </Row>
    </Container>
}