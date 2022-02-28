// Write a MongoDB query to find the restaurants that achieved a score, more than 80 but less than 100


db.restaurants.find( {
    grades: {
        $elemMatch : {
            score: { $gt: 80 , $lt: 100}
        }
    }
})
