import React, { Component } from 'react'
import { Container, Row, Alert, Spinner } from 'reactstrap'
import Context from '../../context'

export default class Grid extends Component {
    static contextType = Context

    getPlaceholder = () => {
        if(this.context.sb.loading)
            return <Spinner type="grow" className="m-auto" color="primary" style={{width: "10em", height: "10em", position: "fixed", zIndex: "-99", left: "0", right: "0", top:"0", bottom: "0"}}/>
            
        if(this.props.items.length === 0)        
            return <Alert color="info">Nothing loaded</Alert>
        return ""
    }

    render = () => 
        <Container>
            <Row>
                {this.getPlaceholder()}
            </Row>
            <Row>
                {this.props.items.length > 0 ?this.props.items.map(this.props.map):""}
            </Row>
            {this.props.children}
        </Container>
}
