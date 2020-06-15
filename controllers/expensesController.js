const fs = require('fs')
const expensesController = (app) => {
    app.get('/', (req, res) => fs.createReadStream('./Mocks/expensesDTO.json').pipe(res));
}

module.exports = expensesController;