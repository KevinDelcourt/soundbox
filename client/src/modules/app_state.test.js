import AppState from './app_state'

let app

let testProps = {
    shuffle: false,
    loop: false,
    volume: 0.5
}

beforeEach(()=>{
    app = new AppState(testProps)
})

it(' constructs ok', () => {
    expect(app.shuffle).toBe(false)
    expect(app.volume).toBe(0.5)
})

it(' constructs ok with a parameter', ()=>{
    app = new AppState(testProps,{shuffle: true})
    expect(app.shuffle).toBe(true)
    expect(app.volume).toBe(0.5)
})

it(' constructs ok with 2 parameters', ()=>{
    app = new AppState(testProps,{shuffle: true, volume: 1})
    expect(app.shuffle).toBe(true)
    expect(app.volume).toBe(1)
    expect(app.loop).toBe(false)
})

it(' constructs with an old state as a parameter', () => {
    app.volume = 1
    app = new AppState(testProps,{loop: true},app)
    expect(app.shuffle).toBe(false)
    expect(app.volume).toBe(1)
    expect(app.loop).toBe(true)
})