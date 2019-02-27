import React, { Component } from 'react'
import ModalButton from '../../utilities/button/ModalButton'
import AboutPanel from './AboutPanel';

export default class AboutButton extends Component {

    render = () =>
        <ModalButton
            color="primary"
            title="About this app"
            modal={{
                title: "A propos / About",
                size: 'lg',
                content: <AboutPanel />
            }}
        >
            <i className="fas fa-info"></i>
        </ModalButton>
}