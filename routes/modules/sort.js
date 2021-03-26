const express = require('express')
const router = express.Router()
const Restaurants = require('../../models/restaurants')

router.get('/:type/:method', (req, res) => {
  const type = req.params.type
  const method = req.params.method

  const typeSelected = {
    name: ['餐廳名稱 A -> Z', '餐廳名稱 Z -> A'],
    rating: ['評分 0.0 -> 5.0', '評分 5.0 -> 0.0']
  }

  let index
  if (method === 'asc') {
    index = 0
  } else {
    index = 1
  }

  const currentSelected = `${typeSelected[type][index]}`

  Restaurants.find()
    .sort({ [type]: [method] })
    .lean()
    .then(restaurant => res.render('index', { restaurants: restaurant, currentSelected }))
    .catch(error => { console.log(error) })
})

module.exports = router