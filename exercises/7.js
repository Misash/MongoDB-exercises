
// Write a MongoDB query to display the next 5 restaurants after skipping first 5 which are in the borough Bronx.


db.restaurants.find({ borough: "Bronx"}).skip(5).limit(5)