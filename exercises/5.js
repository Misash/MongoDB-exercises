// Write a MongoDB query to display all the restaurant which is in the borough Bronx


db.restaurants.find({ borough: "Bronx"})