const {MongoClient} = require("mongodb")
const mongoUrl =  "mongodb://localhost:27017"

const client = new MongoClient(mongoUrl);


async function mongo(){
    try{
        await client.connect();
        // console.log("MongoDbga ulandi")
        const db = await client.db("resumeuz")
        const users = await db.collection("users")
  return {
      users
  }
    }
    catch(e){

        console.error("e")
    }
}
module.exports = mongo;