const {MongoClient,ObjectID}=require('mongodb');

const url='mongodb://localhost:27017';
const dbName='TodoApp';

MongoClient.connect(url,(err,client)=>{
  if (err) {
    return console.log('Unable to connect MongoDB Server');
  }
  console.log('Connected to MongoDB server');
  const db=client.db(dbName);

db.collection('Todos').find({}).toArray().then((docs)=>{
  console.log('Todos');
  console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
  if (err) {
    console.log('Unable to fetch todos',err);
  }
});


  client.close();
});
