/* eslint-disable semi */

function random(n) {
  // returns 0 to n
  return Math.floor(Math.random() * n)
}

function randomD(n) {
  // returns 1 to n
  return Math.ceil(Math.random() * n)
}

function randomRolls(n, s) {
  // return an array of n rolls randomD(s)
  const listOfVals = []
  for (let i = 0; i < n; i += 1) {
    listOfVals.push(randomD(s))
  }
  return listOfVals
}

function getSum(arr) {
  let acc = 0
  for (let i = 0; i < arr.length; i += 1) {
    acc += arr[i]
  }
  return acc
}


module.exports.random = random
module.exports.randomD = randomD
module.exports.randomRolls = randomRolls
module.exports.getSum = getSum
