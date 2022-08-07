const { Router } = require('express')

const router = Router();

/**********
 * TODOS API
 * UTILIZANDO EXPRESS
*/

const todosRepository = TodosRepository();
const NotFound ={
  error: "Not found",
  message: "Resource not Found",
}

// Pegar todos os dados
router.get('/todos', async (req, res) =>{
  const todos = await todosRepository.list();
  if (!todos ){
    res.status(404).send(NotFound)
    return
  }

res.status(200).send(todos);

})

//GET pegar uma
router.get('/todos/:id', async (req, res) =>{

  const id = parseInt(req.params.id)


  const todo = await todosRepository.get(id);

  if(!todo){
    res.status(404).send(NotFound)
    return
  }

  res.status(200).send(todo)

})
//POST
router.post('/todos', async  (req, res) => {
  const todo = req.body
  const inserted = await todosRepository.insert(todo)
    res
      .status(201)
      .header('Location',`/todos/${inserted.id}` )
      .send(inserted)

})

//PUT

router.put('/todos/:id', async (req, res) =>{
  const id = parseInt(req.params.id);
  const todo = {...req.body, id}

  const found = await todosRepository.get(id)
  if(!found){
    res.status(404).send(NotFound)
    return
  }
    const updated = await todosRepository.update(todo)
    res.status(200).send(updated)

})


//DELETE
router.delete('/todos/:id', async (req, res) =>{
  const id = parseInt(req.params.id);
  const found = await todosRepository.get(id)
  if(!found){
    res.status(404).send(NotFound)
    return
  }

  todosRepository.del(id)
  res.status(204).send()
})



  /**
 * FIM DO TODOS API
 */

