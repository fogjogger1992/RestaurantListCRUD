const express = require('express')
const router = express.Router()
const Restaurants = require('../../models/restaurants')

// C
router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('/', (req, res) => {
  const name = req.body.name
  const name_en = req.body.name_en
  const category = req.body.category
  const image = req.body.image
  const location = req.body.location
  const phone = req.body.phone
  const google_map = req.body.google_map
  const rating = req.body.rating
  const description = req.body.description

  return Restaurants.create({
    name: name,
    name_en: name_en,
    category: category,
    image: image,
    location: location,
    phone: phone,
    google_map: google_map,
    rating: rating,
    description: description,
  })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// R
router.get('/:id', (req, res) => {
  const id = req.params.id
  Restaurants.findById(id)
    .lean()
    .then(restaurant => res.render('show', { restaurant: restaurant }))
    .catch(error => console.log(error))
})

// U
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  Restaurants.findById(id)
    .lean()
    .then(restaurant => res.render('edit', { restaurant: restaurant }))
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  return Restaurants.findById(id)
    .then(restaurant => {
      restaurant.name = req.body.name,
        restaurant.name_en = req.body.name_en,
        restaurant.category = req.body.category,
        restaurant.image = req.body.image,
        restaurant.location = req.body.location,
        restaurant.phone = req.body.phone,
        restaurant.google_map = req.body.google_map,
        restaurant.rating = req.body.rating,
        restaurant.description = req.body.description
      return restaurant.save()
    })
    .then(() => res.redirect(`/restaurants/${id}`))
    .catch(error => console.log(error))
})

// D
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Restaurants.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router