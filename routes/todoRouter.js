const express = require('express');
const router = express.Router();
const todoController = require('../controller/todoController');

router.post('/', todoController.addTodos);

router.post('/:id/comment', todoController.addComment);

router.get('/', todoController.getAllTodos);

router.get('/:id', todoController.getOneTodos);

router.put('/:id', todoController.updateTodos);

router.delete('/:id', todoController.deleteTodos);

module.exports = router;