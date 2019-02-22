export default class AppState {
    constructor(defaultProps, changes, oldState){

        for(let prop in defaultProps)
            this[prop] = defaultProps[prop]
        
        for(let prop in oldState)
            this[prop] = oldState[prop]

        for(let prop in changes)
            this[prop] = changes[prop]
            
    }

}