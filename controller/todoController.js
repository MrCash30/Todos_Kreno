// create the general model that link to all models
const Model = require('../models');

// create main Model
// const Todos = db.todos;
// const Users = db.users;

// 1. create todos

const addTodos = async (req, res) => {

    let acivity = {
        text: req.body.text
    }

    const todo = await Model.todos.create(acivity)
    res.status(200).send(todo)
    console.log(todo)
}

// 2. get all todos

const getAllTodos = async (req, res) => {

    let todos = await Model.todos.findAll({})
    res.status(200).send(todos)
}

// 3. get single todos

const getOneTodos = async (req, res) => {

    let id = req.params.id
    let todos = await Model.todos.findOne({
        where: {
            id: id
        }
    })
    res.status(200).send(todos)
}

// 4. update todos

const updateTodos = async (req, res) => {
    let id = req.params.id
    let todos = await Model.todos.update({
        text: req.body.text
    }, {
        where: {
            id: id
        }
    })
    res.status(200).send(todos)
}

// 5. delete todos by id

const deleteTodos = async (req, res) => {
    let id = req.params.id
    await Model.todos.destroy({
        where: {
            id: id
        }
    })
    res.status(200).send("todos is deleted")
}

module.exports = {
    addTodos,
    getAllTodos,
    getOneTodos,
    updateTodos,
    deleteTodos
}