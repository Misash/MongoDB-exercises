
// Write a MongoDB query to find the restaurants who achieved a score more than 90.


db.restaurants.find({ grades: { $elemMatch: { score: {$gt: 90 } }}})