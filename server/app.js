const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

const data = [
    {
        todoItemId: 0,
        name: 'an item',
        priority: 3,
        completed: false
    },
    {
        todoItemId: 1,
        name: 'another item',
        priority: 2,
        completed: false
    },
    {
        todoItemId: 2,
        name: 'a done item',
        priority: 1,
        completed: true
    }
];

//console.log(data[0]);

app.use(morgan('tiny'));
app.use(bodyParser.json());

app.get("/", (req, res) => {

    res.status(200)
    res.json({
        status: "ok"
    });
});

app.get("/api/TodoItems", (req, res) => {

    res.status(200);
    res.json(data);
});

app.get("/api/TodoItems/:number", (req, res) => {
  res.send(data[req.params.number]);
  res.status(200);
});

app.post("/api/ToDoItems/", (req, res) => {
    newToDo = true;
    for (let objIndex in data) {
        if (data[objIndex].todoItemId == req.body.todoItemId) {
            data[objIndex] = req.body;
            res.status(201).send(data[objIndex]);
            newToDo = !newToDo;
        }
    }
    if (newToDo) {
        data.push(req.body);
        res.status(201).json(req.body);
    }
});

app.delete("/api/ToDoItems/:number", (req, res) =>{
    res.send(data[req.params.number]);
    res.status(200);
});

module.exports = app;
