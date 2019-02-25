import AppState from './app_state'

const defaultState = {
    shuffle: false,
    loop: false,
    volume: 0.5,
    speed: 1,
    hotKeys: false,
    edit: false,
    youtubeVideoCode: "",
    search:"",
    page:0
}

export default class SoundboxState extends AppState {
    constructor(changes,old_state){
        super(defaultState,changes,old_state)
    }

    set = (json) => new SoundboxState(json,this)

    setLoop = (boolean) => this.set({loop: boolean, shuffle: false})
    setShuffle = (boolean) => this.set({shuffle: boolean, loop: false})
    setVolume = (value) => this.set({volume: value})
    setSpeed = (value) => this.set({speed: value})
    setHotKeys = (boolean) => this.set({hotKeys: boolean, edit: false})
    setEdit = (boolean) => this.set({edit: boolean, hotKeys: false})
    setCode = (text) => this.set({youtubeVideoCode: text})
    setSearch = (text) => this.set({search: text})

}