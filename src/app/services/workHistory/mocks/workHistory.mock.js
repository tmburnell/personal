var data = require('./workHistory.data.json');

module.exports = {
    '/api/v1/work-history' : {
        get    : (req, res) => {
            res.send(JSON.stringify(data.workHistory));
        }
    }
};
