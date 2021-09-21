class Axios {
    get(url) {
        console.log('get', url)
        return [];
    }
    post(url, data) {
        console.log('post', url, 'body', data)
        return {}
    }
}


function requestUsers(){
    const users = new Axios().get('/users')
    return users;
}
module.exports.Axios = Axios
module.exports.requestUsers = requestUsers