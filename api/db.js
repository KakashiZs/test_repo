const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://fatekakashi:mm123456@cluster-test.3y5ansf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
console.log('start connet');

client.connect(async (err) => {
  console.log('conneted');
  
  const collection = client.db("DB_Test").collection("Collection_Test");
  console.log('collection', collection);

  const 

  // perform actions on the collection object
  client.close();
});
