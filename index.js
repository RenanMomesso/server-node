const ObjectId = require('mongodb').ObjectID;
[...Array(100)].map((_, index) => {
  const id = new ObjectId();
  console.log(id);
});
