const Expenses = require('../Models/expensesModel')
const fs = require('fs')

module.exports = function() {
    {        
        const expenses = JSON.parse(fs.readFileSync('./Mocks/expenses.json'));        

        Expenses.create(expenses, (err,result) => {
            if (err){ 
                console.log(err)
            }
            console.log(result)
        }); 
    };
     
 }