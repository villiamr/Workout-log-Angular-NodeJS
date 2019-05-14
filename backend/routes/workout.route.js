const express = require('express');
const app = express();
const workoutRoute = express.Router();
// Workout model
let Workout = require('../models/Workout');
// Add Workout

workoutRoute.route('/create').post((req, res, next) => {
Workout.create(req.body, (error, data) => {
if (error) {
return next(error)
} else {
res.json(data)
}
})
});
// Get All Workouts
workoutRoute.route('/').get((req, res) => {
Workout.find((error, data) => {
if (error) {
return next(error)
} else {
res.json(data);
}
})
})
module.exports = workoutRoute;