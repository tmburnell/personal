var data = require('./skills.data.json');

module.exports = {
    '/api/v1/skills' : {
        get    : (req, res) => {
            res.send(JSON.stringify(data.skills));
        }
    }
};
