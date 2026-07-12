const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB Connection successful');
  });
//For Testing
// const testTour = new Tour({
//   name: 'The Park Camper',
//   rating: 4.7,
//   price: 297,
// });
// testTour
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log('Error:', err);
//   });
const app = require('./app');
// console.log(process.env);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on the port ${port}....`);
});
