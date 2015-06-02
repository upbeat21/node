var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/", function(err, db) {
    var newDB = db.db("newDB");
    newDB.collectionNames(function(err, collectionNames) {
        console.log("Inital collections: ");
        console.log(collectionNames);
        newDB.createCollection("newCollections", function(err, collection) {
            newDB.collectionNames(function(err, collectionNames) {
                console.log("Collections After creation: ")
                console.log(collectionNames);
                newDB.dropCollection("newCollections", function(err, results) {
                    newDB.collectionNames(function(err, collectionNames) {
                        console.log("Collections after deletion: ");
                        console.log(collectionNames);
                        db.close();
                    })
                })
            })
        })
    })
})