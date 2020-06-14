var fs = require('fs')

module.exports = (app) => {
    app.get('/', (req, res) => fs.createReadStream('./Mocks/expenses.json').pipe(res));
}