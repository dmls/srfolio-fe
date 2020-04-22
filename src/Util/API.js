const axios = require('axios');

class API {
    getPage(uid) {
        return new Promise(function(resolve) {
            uid = uid === '' || uid === '/' ? '' : uid;
            console.log(window.api_url + '/pages?UID=' + uid);
            axios.get(window.api_url + '/pages?UID=' + uid).then(resp => {
                resolve(resp.data[0]);
            });
        });
    }
}

export default API