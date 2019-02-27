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
    page:0,
    choosePlaylist: false,
    idPlaylist: -1,
    editPlaylist: false,
    loading: false
}

export default class SoundboxState extends AppState {
    constructor(changes,old_state){
        super(defaultState,changes,old_state)
    }

    set = (json) => new SoundboxState(json,this)

}