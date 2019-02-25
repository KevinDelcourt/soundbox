import React, { Component } from 'react'
import { Col } from 'reactstrap'
import ChoosePlaylistButtonGroup from '../playlist/ChoosePlaylistButtonGroup';
import Grid from '../utilities/Grid';

export default class PlaylistArray extends Component {
    map = (p, index) =>
        <Col key={index} xs="12" sm="6" md="4" lg="3" style={{ marginTop: "1em", height: "4.5em" }}>
            <ChoosePlaylistButtonGroup playlist={p} index={index} />
        </Col>

    render = () => 
    <Grid items={this.props.playlists} map={this.map} />
}
