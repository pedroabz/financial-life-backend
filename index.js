'use strict'
const express = require('express')
const app = express()
const port =  process.env.PORT || 5000;
const cors = require ('cors')
const expensesController = require('./controllers/expensesController')
const expensesSeeder = require('./Seeders/expenseSeeder')
const mongoose = require('mongoose');
const getExpenses = require('./Repositories/expensesRepository')

app.use(cors())

expensesController(app)

// expensesSeeder()

getExpenses()
mongoose.connect('mongodb+srv://test:test1234@cluster0-twwr6.azure.mongodb.net/expenses?retryWrites=true&w=majority')
app.listen(port, () => console.log(`App listening at http://localhost:${port}`))