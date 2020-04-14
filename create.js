var mc = require('mongodb').MongoClient
var dburl = 'mongodb://localhost:27017'

mc.connect(dburl, {useUnifiedTopology: true}, (err, db) => {
    if(err)throw err
    db.db('newdb').createCollection('newCollection', (err, res) => {
        if(err)throw err
        db.close()
    })
})