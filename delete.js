var mc = require('mongodb').MongoClient
var dburl = 'mongodb://localhost:27017'

mc.connect(dburl, (err, db) => {
    if(err) throw err
    var c = db.db('mydb').collection('customers')
    
    var delQuery = {address: 'bbb'}
    c.deleteOne(delQuery,(err, res) => {
        if(err)throw err
    })
    db.close()
})