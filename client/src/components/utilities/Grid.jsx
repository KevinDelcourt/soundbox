import React, { Component } from 'react'
import { Container, Row, Alert } from 'reactstrap'

export default class Grid extends Component {

    render = () => 
        <Container>
            <Row>
                {this.props.items.length > 0 ? this.props.items.map(this.props.map):<Alert color="warning">Nothing loaded</Alert>}
            </Row>
            {this.props.children}
        </Container>
}
