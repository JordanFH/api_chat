const express = require('express')
const router = express.Router()
const { main } = require('../utils/chatgpt')

router.get('/', function (req, res, next) {
  main();
  res.send('Chat with me!')
})

module.exports = router
