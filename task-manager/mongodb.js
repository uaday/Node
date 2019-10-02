// CRUD create read update delete

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectUrl = "mongodb://localhost:27017";
const databaseName = "task-manager";

MongoClient.connect(connectUrl, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    console.log("====================================");
    console.log("Unable to connect to database");
    console.log("====================================");
    return;
  }

  const db = client.db(databaseName);

  //   db.collection("users").insertOne(
  //     {
  //       name: "Sudipta Ghosh",
  //       age: 26
  //     },
  //     (error, result) => {
  //       if (error) {
  //         return console.log("Unable to insert user");
  //       }

  //       console.log(result.ops);
  //     }
  //   );

  //   db.collection("users").insertMany(
  //     [
  //       {
  //         name: "Jen",
  //         age: 30
  //       },
  //       {
  //         name: "Sarwar",
  //         age: 41
  //       }
  //     ],
  //     (error, result) => {
  //       if (error) {
  //         console.log("Unable to insert documents!");
  //       }
  //       console.log("====================================");
  //       console.log(result.ops);
  //       console.log("====================================");
  //     }
  //   );

  db.collection("tasks").insertMany(
    [
      {
        description: "Task one",
        completed: true
      },
      {
        description: "Task two",
        completed: false
      },
      {
        description: "Task three",
        completed: false
      }
    ],
    (error, result) => {
      if (error) {
        return console.log("Unable to insert the documents!");
      }
      console.log("====================================");
      console.log(result.ops);
      console.log("====================================");
    }
  );
});
