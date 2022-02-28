// Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine for all the documents in the collection restaurant.

db.restaurants.find({},{
    _id: 1 ,
    name: 1 ,
    borough: 1 ,
    cuisine: 1
})

