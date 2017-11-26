const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to conect');
  }
  console.log('Connected to MongoDB server');
  //findOneAndUpdate
  db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5a139ea99ec8e36dfd7539c6')}, {$set: {completed: true}}, {returnOriginal: false}).then((result) => {
    console.log(result);
  })
  // db.close();
});
