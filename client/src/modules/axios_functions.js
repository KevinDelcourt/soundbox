import axios from 'axios'

export const getBaseUrl = () => {
    if (process.env.NODE_ENV === 'test') 
        return 'http://localhost:8888/api_soundbox/server/'
    if (process.env.NODE_ENV === 'development') 
        return 'http://192.168.1.19:8888/api_soundbox/server/'
    if (process.env.NODE_ENV === 'production') 
        return 'http://soundbox.kevin-delcourt.net/api/'
}

export const getSounds = (page,search) => axios.get(getBaseUrl() + 'get_sounds.php',{params:{page: page,search: search}})

export const getSoundCount = (search) => axios.get(getBaseUrl() + 'get_sound_count.php',{params:{search: search}})

export const uploadSounds = (formData) => axios.post(getBaseUrl()+ "add_sound.php",formData,{headers:{'Content-Type': 'multipart/form-data'}})

export const deleteSound = (jsonData) => axios.post(getBaseUrl()+ "delete_sound.php",jsonData)

export const deletePlaylist = (jsonData) => axios.post(getBaseUrl()+ "delete_playlist.php",jsonData)

export const updateSoundName = (jsonData) => axios.post(getBaseUrl()+ "update_sound_name.php",jsonData)

export const getPlaylists = () => axios.get(getBaseUrl() + 'get_playlists.php')

export const getPlaylistSounds = (id) => axios.get(getBaseUrl() + 'get_playlist_sounds.php',{params:{id: id}})

export const getPlaylistName = (id) => axios.get(getBaseUrl() + 'get_playlist_name.php',{params:{id: id}})

export const editPlaylist = (jsonData) => axios.post(getBaseUrl()+ "edit_playlist.php",jsonData)

export const addPlaylist = (jsonData) => axios.post(getBaseUrl()+ "add_playlist.php",jsonData)

