var mc = require('mongodb').MongoClient
var dburl = 'mongodb://localhost:27017'

mc.connect(dburl, (err, db) => {
    if(err)throw err
    var c = db.db('mydb').collection('customers')

    var updateQuery = {address: 'aaa'}
    var updateValue = {$set: {name: 'EEE', address: 'fff'}}
    c.updateOne(updateQuery, updateValue, (err, res) => {
        if(err)throw err
        db.close()
    })
})