const express = require('express')
const router = express.Router()
const Restaurants = require('../../models/restaurants')

// C
router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('/', (req, res) => {
  const { name, name_en, category, image, location, phone, google_map, rating, description } = req.body
  if (Object.values(req.body).indexOf('') === -1) {
    return Restaurants.create({
      name: name,
      name_en: name_en,
      category: category,
      image: image,
      location: location,
      phone: phone,
      google_map: google_map,
      rating: rating,
      description: description
    })
      .then(() => res.redirect('/'))
      .catch(error => console.log(error))
  } else {
    res.render('new', { name, name_en, category, image, location, phone, google_map, rating, description })
  }
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
  const { name, name_en, category, image, location, phone, google_map, rating, description } = req.body
  if (Object.values(req.body).indexOf('') === -1) {
    return Restaurants.findById(id)
      .then(restaurant => {
        restaurant.name = name,
          restaurant.name_en = name_en,
          restaurant.category = category,
          restaurant.image = image,
          restaurant.location = location,
          restaurant.phone = phone,
          restaurant.google_map = google_map,
          restaurant.rating = rating,
          restaurant.description = description
        return restaurant.save()
      })
      .then(() => res.redirect(`/restaurants/${id}`))
      .catch(error => console.log(error))
  } else {
    Restaurants.findById(id)
      .lean()
      .then(restaurant => res.render('edit', { restaurant: restaurant }))
      .catch(error => console.log(error))
  }
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