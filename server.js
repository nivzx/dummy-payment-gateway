const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.json())

const stores = [
  'pizza-hut',
  'kfc',
  'mcdonalds',
  'kells',
  'cargills',
  'arpico-super-center',
  'fashion-bug',
  'nolimit',
  'cool-planet',
  'hilton',
]

stores.forEach((store) => {
  app.post(`/${store}-payment`, (req, res) => {
    console.log(req.body)

    res.json({
      isSuccessful: true,
      message: 'Payment successful',
      details: `Transaction ID: `,
    })
  })
})

app.listen(port, () => {
  console.log(`Dummy Payment Gateway API listening at http://localhost:${port}`)
})
