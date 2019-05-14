const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema

let SetSchema = new Schema({
    weight: String,
    rep: Number
})

let Workout = new Schema({
date: {
    type: Date,
    default: Date.now,
},
name: {
type: String
},
sets:[SetSchema]
}, 
{
collection: 'workouts'
})

module.exports = mongoose.model('Workout', Workout);