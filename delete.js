var mc = require('mongodb').MongoClient
var dburl = 'mongodb://localhost:27017'

mc.connect(dburl, {useUnifiedTopology: true}, (err, db) => {
    if(err) throw err
    var c = db.db('newdb').collection('newCollection')
    
    var delQuery = {address: 'bbb'}
    c.deleteOne(delQuery,(err, res) => {
        if(err)throw err
        db.close()
    })
})