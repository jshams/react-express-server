/* eslint-disable semi */
const express = require('express')
const bodyParser = require('body-parser')

const {
  random,
  randomD,
  randomRolls,
  getSum,
  randomRollsRange,
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

// random number routes
// /random/:n                   returns a number from 0 to n - 1
// /random/sides/:s/            returns a number from 1 to n
// /random/sides/:s/rolls/:n    returns a list of numbers from 1 to n with s elements, and their sum
app.get('/random/:n', (req, res) => {
  const { n } = req.params
  const value = random(n)
  res.json({ value })
})

app.get('/random/sides/:n/', (req, res) => {
  const { n } = req.params
  const value = randomD(n)
  res.json({ value })
})

app.get('/random/sides/:s/rolls/:n', (req, res) => {
  const { n, s } = req.params
  const value = randomRolls(n, s)
  const sum = getSum(value)
  res.json({ value, sum })
})

app.get('/random/start/:s/end/:e/rolls/:n', (req, res) => {
  const { s, e, n } = req.params
  const value = randomRollsRange(s, e, n)
  const sum = getSum(value)
  res.json({ value, sum })
})

const port = 4000
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`))
