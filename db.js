/*******
Database Setup
******/
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// mongoose.connect (err => {
//   const collection = client.db("test").collection("devices");
//   // query for documents that contain the query in the "body" field
//   collection.find({ body: { $regex: query, $options: 'i' } }).toArray((err, vlogs) => {
//     console.log(vlogs);
//     client.close();
//   });
// });

module.exports = mongoose.connection
