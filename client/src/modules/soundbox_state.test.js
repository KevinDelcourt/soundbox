import SoundboxState from './soundbox_state'

let sb

beforeEach(()=>{
    sb = new SoundboxState()
})

it(' constructs ok',()=>{
    expect(sb.shuffle).toBe(false)
    expect(sb.volume).toBe(0.5)
})

it(' set ok',()=>{
    sb.volume = 1
    sb.shuffle = true
    sb = sb.set({loop: true, shuffle: false})
    expect(sb.loop).toBe(true)
    expect(sb.volume).toBe(1)
    expect(sb.shuffle).toBe(false)
})
