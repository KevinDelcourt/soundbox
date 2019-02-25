import React, { Component } from 'react'
import { Container, Row, Col, Alert } from 'reactstrap'
import ChoosePlaylistButtonGroup from '../playlist/ChoosePlaylistButtonGroup';


export default class PlaylistArray extends Component {

    render = () => 
    <Container>
        <Row>
            {this.props.playlists.length > 0 ? this.props.playlists.map((p, index) =>
                <Col key={index} xs="12" sm="6" md="4" lg="3" style={{ marginTop: "1em", height: "4.5em" }}>
                    <ChoosePlaylistButtonGroup playlist={p} index={index} />
                </Col>
            ):<Alert color="warning">No playlists</Alert>}
        </Row>
    </Container>
}
