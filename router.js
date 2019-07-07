const Pizza = require('./controllers/pizza');

module.exports = function (app) {
    app.get('/all', Pizza.find);
    app.post('/save', Pizza.save);
}