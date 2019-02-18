import ReactDOM from 'react-dom'
import React from 'react'

import oui from './assets/oui.mp3'
import noirs from './assets/lesnoirs.mp3'
import tchat from './assets/actchat.mp3'
import enleve from './assets/enleve.mp3'
import ouah from './assets/ouah.mp3'
import ptifichier from './assets/ptifichier.mp3'


import Soundbox from './components/Soundbox'

const audios = [
    { src: oui, name: "Oui" },
    { src: noirs, name: "Noirs" },
    { src: tchat, name: "Tchat" },
    { src: enleve, name: "Enleve"},
    { src: ouah, name: "Ouah"},
    { src: ptifichier, name: "Bingo"}
]

ReactDOM.render(<Soundbox audios={audios} />, document.getElementById('root'));