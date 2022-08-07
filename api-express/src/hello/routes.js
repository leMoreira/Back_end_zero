const { Router } = require('express')

const router = Router()

router.get('/hello', (req, res) =>{
  res.status(200).send("Hello World")
})

router.get('/hello/:name', (req, res) =>{
const name = req.params.name
res.status(200).send(`Hello ${name}`)
})

module.exports = router
