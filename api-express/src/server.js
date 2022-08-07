const express = require('express')
const {TodosRepository} = require("./todos/repository")
const app = express()
const router = express.Router();

app.use(express.json())



app.listen(3000, "0.0.0.0", () =>{
  console.log('Server started 🚀🚀')
})
.once('error', () =>{
  console.error(error)
  process.exit(1)

})
