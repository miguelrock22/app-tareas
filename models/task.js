const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const uniqueValidator = require('mongoose-unique-validator');

let requiredMsg = 'Este campo es requerido.';

let taskSchema = new Schema({
    name: {
        type: String,
        required: ['true', requiredMsg],
        unique: true
    },
    priority: {
        type: Number,
        required: ['true', requiredMsg],
    },
    end_date: {
        type: Date,
        required: ['true', requiredMsg]
    },
    user: {
        type: String,
    }
});

taskSchema.plugin(uniqueValidator, {
    message: '{PATH} ya existe.'
});

module.exports = mongoose.model('tasks', taskSchema);