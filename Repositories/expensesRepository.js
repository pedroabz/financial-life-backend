const Expenses = require('../Models/expensesModel')

module.exports = async function() {
    {               
        const query = Expenses.find();
        const expenses = await query.exec();
        console.log(expenses)
        return query.exec();
    };
 }