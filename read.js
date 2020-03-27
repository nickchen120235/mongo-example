var mc = require('mongodb').MongoClient
var dburl = 'mongodb://localhost:27017'

mc.connect(dburl, (err, db) => {
    if(err)throw err
    var c = db.db('newdb').collection('newCollection')
    //Find the first document
    c.findOne({}, (err, res) => {
        if(err)throw err
        console.log('First Document:')
        console.log(res)
    })
    //Find all documents
    c.find({}).toArray((err, res) => {
        if(err)throw err
        console.log('All Documents:')
        console.log(res)
    })
    //Projection
    c.find({}, {projection: {_id: 0, name: 1}}).toArray((err, res) => {
        if(err)throw err
        console.log('Projection on \'name\':')
        console.log(res)
    })
    //Filter
    var query = {address: 'bbb'}
    c.find(query).toArray((err, res) => {
        if(err)throw err
        console.log('Address = \'bbb\':')
        console.log(res)
        db.close()
    })
})