const todoController = require('../controller/todoController');

const router = require('express').Router();

router.post('/addTodos', todoController.addTodos)

router.get('/allTodos', todoController.getAllTodos)

router.get('/:id', todoController.getOneTodos)

router.put('/:id', todoController.updateTodos)

router.delete('/:id', todoController.deleteTodos)

module.exports = router;