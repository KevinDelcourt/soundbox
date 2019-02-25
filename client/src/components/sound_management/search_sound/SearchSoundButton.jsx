import React, { Component } from 'react'
import ModalButton from '../../utilities/button/ModalButton'
import SearchSoundInput from './SearchSoundInput';
import Context from '../../../context'

export default class SearchSoundButton extends Component {
    static contextType = Context

    render = () =>
        <ModalButton
            color={this.context.sb.search === ""?"primary":"success"}
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