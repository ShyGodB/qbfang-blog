import axios from 'axios'

const post = async (url, data) => {
    return axios({
        method: 'POST',
        url: url,
        responseType: 'JSON',
        data: data
    })
}

const get = async (url, params) => {
    return axios({
        method: 'GET',
        url: url,
        responseType: 'JSON',
        params: params
    })
}

export default {
    post,
    get
}
