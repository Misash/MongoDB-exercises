


db.restaurants.find(
    {
        cuisine: {$ne: "American "} ,
        "grades.grade": {$eq: "A"} ,
        borough: {$ne: "Brooklyn"}
    }
).sort({cuisine: -1})















