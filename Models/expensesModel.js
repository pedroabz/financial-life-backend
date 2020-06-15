var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var expensesSchema = new Schema({
    description: String,
    recurrent: Boolean,
    currentInstallment: Number,
    totalNumberInstallments: Number,
    value: Number,
    year: Number,
    month: String
});

var Expenses = mongoose.model('Expenses', expensesSchema);

module.exports = Expenses;