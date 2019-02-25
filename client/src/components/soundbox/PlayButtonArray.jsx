import React, { Component } from 'react'
import { Container, Row, Col, Alert } from 'reactstrap'
import PlayButtonGroup from '../controls/PlayButtonGroup';
import Navigation from './Navigation';


export default class PlayButtonArray extends Component {

    render = () => 
    <Container>
        <Row>
            {this.props.audios.length > 0 ? this.props.audios.map((a, index) =>
                <Col key={index} xs="12" sm="6" md="4" lg="3" style={{ marginTop: "1em", height: "4.5em" }}>
                    <PlayButtonGroup 
                        index={index} 
                        sound={a} 
                        />
                </Col>
            ):<Alert color="warning">No sounds loaded</Alert>}
        </Row>
        <Navigation />
    </Container>
}
