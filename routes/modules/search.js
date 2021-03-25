const express = require('express')
const router = express.Router()
const Restaurants = require('../../models/restaurants')

router.get('', (req, res) => {
  const keyword = req.query.keyword.toLowerCase()
  Restaurants.find({
    '$or': [
      { name: { $regex: keyword, $options: 'si' } },
      { category: { $regex: keyword, $options: 'si' } }
    ]
  })
    .lean()
    .then(restaurant => res.render('index', { restaurants: restaurant, keyword }))
    .catch(error => console.log(error))
})

module.exports = router