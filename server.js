const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = requre("./routes")

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);
// Send every other request to the React app
// Define any API routes before this runs
mongoose.connect(`mongodb+srv://Mlanglois:${process.env.DB_PASS}@cluster0.oy7eo.mongodb.net/googlebooks?retryWrites=true&w=majority`,(err)=>{
  if(err) throw err;
  console.log("DB Connected Successfully");
  });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
