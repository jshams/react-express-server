/* eslint-disable semi */
const express = require('express')
const bodyParser = require('body-parser')

const {
  random,
  randomD,
  randomRolls,
  getSum,
} = require('./utils')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// ** Proxy from React can't get at '/' for some reason?
// Apparently this is expected behavior... **
// Test this route with: localhost:4000/
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World',
    Copyright: new Date().getFullYear(),
  })
})

// A simple route that returns a JSON object
// Test this route with:
app.get('/about', (req, res) => {
  // This Object is converted to JSON and returned.
  res.json({ about: 'this service generates a random numbers.' })
})

// Random number route
// Test this route with: http://localhost:4000/random?n=99
// Where n=99 sets the range of the random number returned
app.get('/random/:n', (req, res) => {
  const { n } = req.params
  const value = random(n)
  res.json({ value })
})

app.get('/randomD/:n', (req, res) => {
  const { n } = req.params
  const value = randomD(n)
  res.json({ value })
})

app.get('/randomRolls/:n/:s', (req, res) => {
  const { n, s } = req.params
  const value = randomRolls(n, s)
  const sum = getSum(value)
  res.json({ value, sum })
})

const port = 4000
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`))
