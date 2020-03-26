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

mc.connect(dburl, (err, db) => {
    if(err)throw err
    var dbo = db.db('mydb')
    //Insert a document
    dbo.collection('customers').insertOne(singleObj, (err, res) => {
        if(err)throw err
        console.log(res)
    })
    //Insert multiple documents
    dbo.collection('customers').insertMany(multipleObjs, (err, res) => {
        if(err)throw err
        console.log(res)
    })
    db.close()
})