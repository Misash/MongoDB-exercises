
// Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine, but exclude the field _id for all the documents in the collection restaurant.

db.restaurants.find({} , {
    _id: 0 ,
    name: 1 ,
    borough: 1 ,
    cuisine: 1 ,
    restaurant_id : 1
})