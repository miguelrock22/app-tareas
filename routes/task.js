const express = require('express');
const taskController = require('../controllers/task');
const app = express();

const { verifyToken } = require('../middlewares/auth');
const user = require('../models/user');

app.get('/api/task', verifyToken, (req, res) => {
    try {
        let opts = {
            from: Number(req.query.from) || 0,
            limit: Number(req.query.limit) || 5,
            filter: { user: req.user._id }
        }
        taskController.get(opts, (err, tasksDb) => {
            if (err)
                return res.status(400).json({ ok: false, err });
            taskController.count(opts, (err, count) => {
                if (err)
                    return res.status(400).json({ ok: false, err });
                res.json({ ok: true, tasksDb, count });

            });
        });
    } catch (error) {
        res.status(500).json({ ok: false, error });
    }
});

/*app.get('/task/:id', (req, res) => {
    let id = req.params.id;
    res.json("Something");
});*/

app.post('/api/task', verifyToken, (req, res) => {
    let body = req.body;
    body.user = req.user._id;
    taskController.insert(body, (err, taskDb) => {
        if (err)
            return res.status(400).json({ ok: false, err });
        res.json({ ok: true, msg: 'Tarea agregado correctamente' });
    });
});

module.exports = app;