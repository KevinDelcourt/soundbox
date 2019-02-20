import axios from 'axios'

export const getBaseUrl = () => {
    if (process.env.NODE_ENV === 'development') 
        return 'http://192.168.1.19:8888/api_soundbox/server/'
    if (process.env.NODE_ENV === 'production') 
        return 'http://soundbox.kevin-delcourt.net/api/'
}

export const getSounds = () => axios.get(getBaseUrl() + 'get_sounds.php')

export const deleteSound = (jsonData) => axios.post(getBaseUrl()+ "delete_sound.php",jsonData)

export const updateSoundName = (jsonData) => axios.post(getBaseUrl()+ "update_sound_name.php",jsonData)