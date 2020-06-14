'use strict'
const express = require('express')
const app = express()
const port =  process.env.PORT || 5000;
const cors = require ('cors')
const expensesController = require('./controllers/expensesController')

app.use(cors())

expensesController(app)

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))