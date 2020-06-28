let Task = require('../models/task');

let get = (opts, handle) => {
    Task.find(opts.filter)
        .skip(opts.from)
        .limit(opts.limit)
        .exec(handle);
    return;
};

let count = (opts, handle) => {
    Task.countDocuments(opts.filter, handle);
};

let insert = (task, handle) => {
    try {
        let t = new Task(task);
        t.save(handle);
        return;
    } catch (err) {
        return err;
    }
};

let update = (task, handle) => {
    try {
        Task.findById(task._id, (err, taskDb) => {
            if (!err) {
                taskDb.name = task.name;
                taskDb.priority = task.priority;
                taskDb.end_date = task.end_date;
                taskDb.save(handle);
                return
            }
            return err;
        });
    } catch (err) {
        return err;
    }
}

let remove = (task, handle) => {
    try {
        Task.findById(task._id, (err, taskDb) => {
            if (!err) {
                if (taskDb.user == task.user)
                    taskDb.remove(handle);
                return
            }
            return err;
        });
    } catch (err) {
        return err;
    }
}


module.exports = {
    get,
    insert,
    count,
    update,
    remove
}