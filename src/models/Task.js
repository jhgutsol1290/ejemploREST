const {model, Schema} = require('mongoose')

const taskSchema = new Schema({
    name: {type: String},
    description: {type: String}
})

module.exports = model('Task', taskSchema)