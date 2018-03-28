const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect MongoDB Database',err);
  }
  console.log('Connected to MongoDB Database');
  const db=client.db('TodoApp');
  client.close();
});
