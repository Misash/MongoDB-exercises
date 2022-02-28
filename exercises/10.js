
// 10. Write a MongoDB query to find the restaurants which locate in latitude value less than -95.754168.

db.restaurants.find({ "address.coord": { $lt: -95.754168}})