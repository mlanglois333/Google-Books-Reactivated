const mongoose = require("mongoose");
const db = require("../models");



mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
 
  {
    title: "BornAfrican Childhood",
    author: "Trevorasdff Noah",
    description: "descriasdfdfdption here",
    image: "asdfffdsdfasdf",
    link: "aaaasdsdsdsdsdfdfd",
    date: new Date(Date.now())
  },
  {
    title: "Born a ican Childhood",
    author: "Trevorh",
    description: "description hereasdf",
    image: "asdfdfdfasdf",
    link: "asasdfdfd",
    date: new Date(Date.now())
  },
  {
    title: "Born a Crime: Stories from a South African Childhood",
    author: "Trevor Noah",
    description: "description here",
    image: "asdfasdf",
    link: "asdfdfd",
    date: new Date(Date.now())
  },
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
