const {Router} = require('express')

const router = Router()

const withAsyncErrorHandler = require('./middlewares/async-error')


const createUser =

router.get('/', withAsyncErrorHandler(async (req, res) =>{
  res.status(200).send({users:[]})
}))


router.get('/:id', withAsyncErrorHandler (async (req, res) =>{
  res.status(200).send({})
}))


router.post('/', withAsyncErrorHandler(async (req, res)=>{
  res.status(201).header('location', '/users/????').send({})
}))

router.put('/:id', withAsyncErrorHandler (async (req, res) =>{
  res.status(200).send({users:[]})
}))

router.delete('/:id',withAsyncErrorHandler (async (req, res) =>{
  res.status(200).send({users:[]})
}))



module.exports = router
