const express = require('express')

export const router = express.Router()
router.get('/', (req, res, next) => {
  res.send('Greetings')
})
