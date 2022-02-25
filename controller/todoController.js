// create the general model that link to all models
const Model = require('../models');
// const comment = require('../models/comment');

// create main Model
// const Todos = db.todos;
// const Users = db.users;

// 1. create todos

const addComment = async (req, res) => {
    try {
        const comments = await Model.comment.create({
            comment: req.body.comment,
            todoId: req.params.id
        })
        res.status(200).send(comments)
    } catch (err) {
        console.log(err)
    }
}

const addTodos = async (req, res) => {
    try {
        const todo = await Model.todos.create({
            title: req.body.title,
            description: req.body.description
        })
        res.status(200).send(todo)
    } catch (err) {
        console.log(err)
    }
}

// 2. get all todos

const getAllTodos = async (req, res) => {

    try {
        let todos = await Model.todos.findAll({
            include: [{
                model: Model.comment,
                as: 'Comment'
            }]
        })
        res.status(200).send(todos)
    } catch (err) {
        console.log(err)
    }
}

// 3. get single todos

const getOneTodos = async (req, res) => {

    try {
        let id = req.params.id
        let todos = await Model.todos.findOne({
            where: {
                id: id
            },
            include: [{
                model: Model.comment,
                as: 'Comment'
            }]
        })
        res.status(200).send(todos)
    } catch (err) {
        console.log(err)
    }
}

// 4. update todos

const updateTodos = async (req, res) => {
    try {
        let id = req.params.id
        let todos = await Model.todos.update({
            title: req.body.title,
            description: req.body.description
        }, {
            where: {
                id: id
            }
        })
        res.status(200).send(todos)
    } catch (err) {
        console.log(err)
    }
}

// 5. delete todos by id

const deleteTodos = async (req, res) => {
    try {
        let id = req.params.id
        await Model.todos.destroy({
            where: {
                id: id
            }
        })
        res.status(200).send("todos is deleted")
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    addTodos,
    getAllTodos,
    getOneTodos,
    updateTodos,
    deleteTodos,
    addComment
}