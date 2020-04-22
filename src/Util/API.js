const axios = require('axios');

class API {
    getNavLinks() {
        return new Promise(function(resolve) {
            axios.get(window.api_url + '/nav-links').then(resp => {
                resolve(resp.data);
            });
        });
    }

    getPage(uid) {
        return new Promise(function(resolve) {
            uid = uid === '' || uid === '/' ? '' : uid;
            axios.get(window.api_url + '/pages?UID=' + uid).then(resp => {
                resolve(resp.data[0]);
            });
        });
    }
}

export default API