import React, { Component } from 'react'
import { Col } from 'reactstrap'
import PlayButtonGroup from '../controls/PlayButtonGroup';
import Navigation from './Navigation';
import Grid from '../utilities/Grid';

export default class PlayButtonArray extends Component {

    map = (a,index) => 
        <Col key={index} xs="12" sm="6" md="4" lg="3" style={{ marginTop: "1em", height: "4.5em" }}>
            <PlayButtonGroup 
                index={index} 
                sound={a} 
                />
        </Col>

    render = () => 
    <Grid map={this.map} items={this.props.audios}>
        <Navigation />
    </Grid>
}
