var data = require('./user.data.json');

module.exports = {
    '/api/v1/user' : {
        get    : (req, res) => {
            res.send(JSON.stringify(data.user));
        }
    }
};
