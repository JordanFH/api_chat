const express = require('express')
const app = express()
const port = 3000

const chatRouter = require('./routes/chat')

app.use('/chat', chatRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})