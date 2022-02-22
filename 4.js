

// Write a MongoDB query to display the fields restaurant_id, name, borough and zip code, but exclude the field _id for all the documents in the collection restaurant.

db.restaurants.find({} , {
    restaurant_id: 1 ,
    name: 1 ,
    borough: 1 ,
    "address.zipcode" : 1 ,
    _id : 0
})