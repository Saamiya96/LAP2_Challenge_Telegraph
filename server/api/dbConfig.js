const { MongoClient } = require('mongodb')
// const connectionUrl = process.env.DB_CONNECTION;
const connectionUrl = 'mongodb://localhost:27017/telegraph'
// const dbName = process.env.DB_NAME

const init = async () => {
    let client = await MongoClient.connect(connectionUrl)
    return client.db(dbName)
    // console.log('connected to database!', dbName)
    // return client.db(dbName)
  }
  

module.exports = { init }
