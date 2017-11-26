const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to conect');
  }
  console.log('Connected to MongoDB server');

/*  db.collection('Todos').insertOne({
    text: 'Some Text',
    completed: false
  }, (err, result) => {
    if(err) {
      return console.log('Error');
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });*/

  db.collection('Users').insertOne({
    name: 'masihur',
    age: 27,
    location: 'New York'
  }, (err, result) => {
    if(err) {
      return console.log("Error in Users Collection");
    }
    console.log(JSON.stringify(result, undefined, 2));
  });

  db.close();
});
