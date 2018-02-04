var data = require('./education.data.json');

module.exports = {
    '/api/v1/education' : {
        get    : (req, res) => {
            res.send(JSON.stringify(data.education));
        }
    }
};
