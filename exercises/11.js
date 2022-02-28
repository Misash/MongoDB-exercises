


db.restaurants.find({

    $and: [
       { cuisine: { $ne: "American " } } ,
       { "grades.score": {$gt: 70}} ,
       { "address.coord": {$lt: -65.754168}}
    ]

})