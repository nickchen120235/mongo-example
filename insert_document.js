var mc = require('mongodb').MongoClient
var dburl = 'mongodb://localhost:27017'

var singleObj = {
    name: 'AAA',
    address: 'aaa'
}
var multipleObjs = [
    {name: 'BBB', address: 'bbb'},
    {name: 'CCC', address: 'ccc'},
    {name: 'DDD', address: 'ddd'},
    {name: 'EEE', address: 'eee'}
]

mc.connect(dburl, {useUnifiedTopology: true}, (err, db) => {
    if(err)throw err
    var c = db.db('newdb').collection('newCollection')
    //Insert a document
    c.insertOne(singleObj, (err, res) => {
        if(err)throw err
        console.log(res)
    })
    //Insert multiple documents
    c.insertMany(multipleObjs, (err, res) => {
        if(err)throw err
        console.log(res)
        db.close()
    })
})