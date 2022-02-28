// Write a MongoDB query to display the first 5 restaurant which is in the borough Bronx


db.restaurants.find({ borough:"Bronx"}).limit(5)