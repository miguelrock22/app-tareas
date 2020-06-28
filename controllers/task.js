let Task = require('../models/task');

let get = (opts, handle) => {
    Task.find(opts.filter)
        /*.skip(opts.from)
        .limit(opts.limit)*/
        .exec(handle);
    return;
};

let count = (opts, handle) => {
    Task.countDocuments(opts.filter, handle);
};

let insert = (task, handle) => {
    let t = new Task(task);
    t.save(handle);
};

module.exports = {
    get,
    insert,
    count
}