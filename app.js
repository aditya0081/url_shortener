const express = require('express')
const app = express()
const port = 3000
const createRouter = require('./Routes/create')
const getRouter = require('./Routes/geturl');

app.use('/create', createRouter);
app.use('/geturl', getRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})