const router = require('express').Router()
const Workout = require('../models/workout.js')

router.get('/api/workouts', function(req, res) {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'
                }
            }
        }
    ]).then(function(dbWorkouts) {
        res.json(dbWorkouts)
    }).catch(function(err) {
        res.json(err)
    })
})

module.exports = router
