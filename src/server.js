const express = require("express");

const router = require("./routes/api");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

// Create a listen function
app.listen(PORT, function () {
  console.log(`App is listening at ${PORT}`);
});
