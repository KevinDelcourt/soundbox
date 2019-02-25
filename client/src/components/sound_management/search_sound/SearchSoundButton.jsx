import React, { Component } from 'react'
import ModalButton from '../../utilities/button/ModalButton'
import SearchSoundInput from './SearchSoundInput';

export default class SearchSoundButton extends Component {

    render = () =>
        <ModalButton
            color="primary"
            title="Search for a sound"
            modal={{
                title: "Search for a sound",
                size: "sm",
                content: <SearchSoundInput />
            }}
        >
            <i className="fas fa-search"></i>
        </ModalButton>
}