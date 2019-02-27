import axios from 'axios'
import * as fx from './axios_functions'

const resetDb = () =>  axios.get("http://localhost:8888/api_soundbox/server/init_db.php").then((response)=>{
    expect(response.data).toBe("ok")
})

const getAddSoundFormdata = (nb_sound) => {
    let f = new FormData()
    f.append('password',"abc")
    for(let i = 0; i < nb_sound; i++){
        f.append('file['+i+']',new File(["test"],i+".mp3"))
        f.append('name['+i+']',i)
    }
    return f
}

async function addPlaylist(nbPlaylist){
    for(let i = 0; i < nbPlaylist; i++)
        await fx.addPlaylist({name: "test", password: "abc"}).then((response)=>{
            expect(response.data).toMatch(/done: 00000/)
        })
}

const addSounds = (nb_sound) => fx.uploadSounds(getAddSoundFormdata(nb_sound)).then((response) => {
    expect(response.data).toMatch(/done:/)
})

beforeAll(async ()=>{await resetDb()})

afterAll(async ()=>{await resetDb()})

describe('getters with no data',()=>{
    test('get sound count is 0',()=>{
        return fx.getSoundCount("").then((response)=>{
            expect(response.data).toBe(0)
        })
    })

    test('get sounds is empty',()=>{
        return fx.getSounds(0,"").then((response)=>{
            expect(response.data).toEqual([])
        })
    })

    test('get playlists is empty',()=>{
        return fx.getPlaylists().then((response)=>{
            expect(response.data).toEqual([])
        })
    })

    test('get playlist sounds is empty',()=>{
        return fx.getPlaylistSounds(1).then((response)=>{
            expect(response.data).toEqual([])
        })
    })

    test('get playlist name is null',()=>{
        return fx.getPlaylistName(1).then((response)=>{
            expect(response.data).toEqual({"name": null})
        })
    })
})

describe('uploading sounds',()=>{
    afterAll(async ()=>{await resetDb()})

    it('can add one sound',()=>{
        return fx.uploadSounds(getAddSoundFormdata(1)).then((response)=>{
            expect(response.data).toBe("done: 00000 ")
        })
    })

    it('can add 3 sounds',()=>{
        return fx.uploadSounds(getAddSoundFormdata(3)).then((response)=>{
            expect(response.data).toBe("done: 00000 00000 00000 ")
        })
    })

    it('wont add a non audio file alone',()=>{
        let f = getAddSoundFormdata(0)
        f.append('file[0]',new File(["test"],"video.mp4"))
        f.append('name[0]',"video")
        return fx.uploadSounds(f).then((response)=>{
            expect(response.data).toBe("error: no valid files")
        })
    })

    it('wont add a non audio file in group',()=>{
        let f = getAddSoundFormdata(2)
        f.append('file[2]',new File(["test"],"video.mp4"))
        f.append('name[2]',"video")
        return fx.uploadSounds(f).then((response)=>{
            expect(response.data).toBe("done: 00000 00000 ")
        })
    })

    it('wont add an empty name file',()=>{
        let f = getAddSoundFormdata(2)
        f.append('file[2]',new File(["test"],"2.mp3"))
        f.append('name[2]',"")
        return fx.uploadSounds(f).then((response)=>{
            expect(response.data).toBe("done: 00000 00000 ")
        })
    })

    it('wont add a long name file',()=>{
        let f = getAddSoundFormdata(2)
        f.append('file[2]',new File(["test"],"2.mp3"))
        f.append('name[2]',"abcdefghijklmnop")
        return fx.uploadSounds(f).then((response)=>{
            expect(response.data).toBe("done: 00000 00000 ")
        })
    })
})

describe('getting sound counts',()=>{
    beforeAll(async ()=>{await addSounds(15)})
    afterAll(async ()=>{await resetDb()})

    test('get sound count is 15',()=>{
        return fx.getSoundCount("").then((response)=>{
            expect(response.data).toBe(15)
        })
    })

    test('get sound count with filter 2 is 2',()=>{
        return fx.getSoundCount("2").then((response)=>{
            expect(response.data).toBe(2)
        })
    })

    test('get sound count with filter z is 0',()=>{
        return fx.getSoundCount("z").then((response)=>{
            expect(response.data).toBe(0)
        })
    })

    test('get sound count filter \'z; is 0 (no sql injection)',()=>{
        return fx.getSoundCount("'z;").then((response)=>{
            expect(response.data).toBe(0)
        })
    })
})

describe('getting sounds',()=>{
    beforeAll(async ()=>{
        await addSounds(15) //NB: can't upload more than 20 files at once
        await addSounds(15)
    })
    afterAll(async ()=>{await resetDb()})

    test('page 0 no filter is 26 rows',()=>{
        return fx.getSounds(0,"").then((response)=>{
            expect(response.data.length).toBe(26)
            expect(response.data[0].id).toBe("30")
        })
    })

    test('page 1 no filter is 4 rows',()=>{
        return fx.getSounds(1,"").then((response)=>{
            expect(response.data.length).toBe(4)
            expect(response.data[0].id).toBe("4")
        })
    })

    test('page 0 filter 2 is 4 rows',()=>{
        return fx.getSounds(0,"2").then((response)=>{
            expect(response.data.length).toBe(4)
            expect(response.data[0].name).toMatch(/2/)
            expect(response.data[1].name).toMatch(/2/)
        })
    })

    test('page 1 filter 2 is empty',()=>{
        return fx.getSounds(1,"2").then((response)=>{
            expect(response.data).toEqual([])
        })
    })

    test('page 0 filter \'z; is empty (no sql injection)',()=>{
        return fx.getSounds(0,"'z;").then((response)=>{
            expect(response.data).toEqual([])
        })
    })
})

describe('set sound name',()=>{
    beforeAll(async ()=>{await addSounds(1)})
    afterAll(async ()=>{await resetDb()})

    test('can set sound name 11 char or less',()=>{
        return fx.updateSoundName({id: 1,password: "abc",name: "11character"}).then((response)=>{
            expect(response.data).toMatch(/done: 00000/)
        })
    })

    test('cannot set empty name',()=>{
        return fx.updateSoundName({id: 1,password: "abc",name: ""}).then((response)=>{
            expect(response.data).toMatch(/error: bad request/)
        })
    })

    test('cannot set empty id',()=>{
        return fx.updateSoundName({password: "abc",name: "abc"}).then((response)=>{
            expect(response.data).toMatch(/error: bad request/)
        })
    })

    test('cannot set name lonnger than 11 char',()=>{
        return fx.updateSoundName({id: 1,password: "abc",name: "12characters"}).then((response)=>{
            expect(response.data).toMatch(/error: bad request/)
        })
    })
})

describe('delete sound',()=>{
    beforeAll(async ()=>{await addSounds(2)})
    afterAll(async ()=>{await resetDb()}) 

    test('can delete a sound',()=>{
        return fx.deleteSound({id: 1, password: "abc"}).then((response)=>{
            expect(response.data).toMatch(/done: 00000/)
        })
    })
})

describe('add playlist',()=>{
    afterAll(async ()=>{await resetDb()}) 

    test('can add a playlist',()=>{
        return fx.addPlaylist({name: "test", password: "abc"}).then((response)=>{
            expect(response.data).toMatch(/done: 00000/)
        })
    })

    test('wont add a playlist with empty name',()=>{
        return fx.addPlaylist({name: "", password: "abc"}).then((response)=>{
            expect(response.data).toMatch(/error: bad request/)
        })
    })

    test('wont add a playlist with name longer than 11 char',()=>{
        return fx.addPlaylist({name: "12characters", password: "abc"}).then((response)=>{
            expect(response.data).toMatch(/error: bad request/)
        })
    })

    test('cannot add more than 26 playlists',async ()=>{
        await resetDb()
        await addPlaylist(26)
        return fx.addPlaylist({name: "test", password: "abc"}).then((response)=>{
            expect(response.data).toMatch(/error: max/)
        })
    },30000)
})

describe('delete playlist',()=>{
    beforeAll(async ()=>{await addPlaylist(1)})
    afterAll(async ()=>{await resetDb()}) 

    test('can delete a playlist',()=>{
        return fx.deletePlaylist({id: 1, password: "abc"}).then((response)=>{
            expect(response.data).toMatch(/done: 00000/)
        })
    })
})

describe('get playlists',()=>{
    beforeAll(async ()=>{await addPlaylist(3)})
    afterAll(async ()=>{await resetDb()}) 

    test('can get all the playlists',()=>{
        return fx.getPlaylists().then((response)=>{
            expect(response.data).toEqual([{name: "test",id: "3"},{name: "test",id: "2"},{name: "test",id: "1"}])
        })
    })
})

describe('edit playlist',()=>{
    beforeAll(async ()=>{
        await addPlaylist(1)
        await addSounds(3)
    })

    afterAll(async ()=>{await resetDb()}) 

    test('can edit a playlist',()=>{
        return fx.editPlaylist({
            password: "abc",
            playlist: {
                id: 1,
                name: "abcd"
            },
            sound: [1,2,3]
        }).then((response)=>{
            expect(response.data).toMatch(/done: 00000/)
        })
    })

    test('wont set an epmty playlist name',()=>{
        return fx.editPlaylist({
            password: "abc",
            playlist: {
                id: 1,
                name: ""
            },
            sound: [1,2,3]
        }).then((response)=>{
            expect(response.data).toMatch(/error:/)
        })
    })

    test('wont set a playlist name longer than 11 char',()=>{
        return fx.editPlaylist({
            password: "abc",
            playlist: {
                id: 1,
                name: "12characters"
            },
            sound: [1,2,3]
        }).then((response)=>{
            expect(response.data).toMatch(/error:/)
        })
    })
})

describe('get playlist sounds',()=>{
    beforeAll(async ()=>{
        await addPlaylist(2)
        await addSounds(3)
    })

    afterAll(async ()=>{await resetDb()}) 

    test('can get the sounds of a playlst',async ()=>{
        await fx.editPlaylist({
            password: "abc",
            playlist: {
                id: 1,
                name: "abc"
            },
            sound: [1,2,3]
        }).then((response)=>{
            expect(response.data).toMatch(/done:/)
        })

        return fx.getPlaylistSounds(1).then((response)=>{
            expect(response.data.length).toBe(3)

        })
    })

    test('can get an empty playlst',()=>{
        return fx.getPlaylistSounds(2).then((response)=>{
            expect(response.data).toEqual([])
        })
    })
})