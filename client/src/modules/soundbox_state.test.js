import SoundboxState from './soundbox_state'

let sb

beforeEach(()=>{
    sb = new SoundboxState()
})

it(' constructs ok',()=>{
    expect(sb.shuffle).toBe(false)
    expect(sb.volume).toBe(0.5)
})

it(' set Loop ok',()=>{
    sb.volume = 1
    sb.shuffle = true
    sb = sb.setLoop(true)
    expect(sb.loop).toBe(true)
    expect(sb.volume).toBe(1)
    expect(sb.shuffle).toBe(false)
})

it(' set Shuffle ok',()=>{
    sb.loop = true
    sb = sb.setShuffle(false)
    expect(sb.loop).toBe(false)
    expect(sb.shuffle).toBe(false)
})

it(' set Volume ok',()=>{
    expect(sb.volume).toBe(0.5)

    sb = sb.setVolume(0.7)
    expect(sb.volume).toBe(0.7)
})

it(' set Speed ok',()=>{
    expect(sb.speed).toBe(1)
    sb = sb.setSpeed(0.2)
    expect(sb.speed).toBe(0.2)
})

it(' set Edit ok',()=>{
    expect(sb.edit).toBe(false)
    sb.hotKeys = true;
    sb = sb.setEdit(true)
    expect(sb.edit).toBe(true)
    expect(sb.hotKeys).toBe(false)
})

it(' set hotKeys ok',()=>{
    expect(sb.hotKeys).toBe(false)
    sb.edit = true;
    sb = sb.setHotKeys(true)
    expect(sb.edit).toBe(false)
    expect(sb.hotKeys).toBe(true)
})

it(' set code ok',()=>{
    expect(sb.youtubeVideoCode).toBe("")
    sb = sb.setCode("ef6hd_p")
    expect(sb.youtubeVideoCode).toBe("ef6hd_p")
})

it(' set search ok',()=>{
    expect(sb.search).toBe("")
    sb = sb.setSearch("ef6hd_p")
    expect(sb.search).toBe("ef6hd_p")
})