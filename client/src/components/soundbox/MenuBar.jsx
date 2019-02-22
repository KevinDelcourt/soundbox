import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap'

export default class MenuBar extends Component {
    state = {isOpen: false}

    toggle = () => this.setState({isOpen: !this.state.isOpen})

    render = () => <Navbar color="dark" light expand="md">
        <NavbarBrand className="m-1">
            {this.props.brand}
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                {this.props.children.map((child,index)=>
                    <NavItem className="m-1" key={index}>
                        {child}
                    </NavItem>
                )}
            </Nav>
        </Collapse>
    </Navbar>
}