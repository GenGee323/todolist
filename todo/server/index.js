const express = require('express')


const app = express()
const PORT = 3333


const todoCtrl = require('./controllers/todoController')


app.use(express.json())


app.get('/api/movies', todoCtrl.getTodoList)
app.post('/api/movies', todoCtrl.addTodo)
app.delete('/api/movies/:id', todoCtrl.deleteTodo)
app.put('/api/movies/:id', todoCtrl.editTodo)


app.listen(PORT, () => console.log(`Server is hippity hoppity poppeing on port ${PORT}`))



