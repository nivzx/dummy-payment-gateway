const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.json())

app.post('*', (req, res) => {
  console.log(req.body)

  res.json({
    isSuccessful: true,
    message: 'Payment successful',
    details: `Transaction ID: ${Math.floor(Math.random() * 1000000)}`,
  })
})

app.listen(port, () => {
  console.log(`Dummy Payment Gateway API listening at http://localhost:${port}`)
})
