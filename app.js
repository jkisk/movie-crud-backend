const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

app.disable('x-powered-by')
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

//routes

const movieRoutes = require('./routes.js')
app.use('/', movieRoutes)


// error handling

app.use((err, req, res, next) => {
  console.error(err)
  const status = err.status || 500
  res.status(status).json({ error: err })
})

app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Wait What?' } })
})

// server

const listener = () => console.log(`movie-ratings listening on port ${port}!`)
app.listen(port, listener)

module.exports = app