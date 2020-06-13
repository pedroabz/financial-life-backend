'use strict'
const express = require('express')
const app = express()
const port =  process.env.PORT || 5000;
const cors = require ('cors')
var fs = require('fs')

app.use(cors())

app.get('/', (req, res) => fs.createReadStream('./Mocks/expenses.json').pipe(res));

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))