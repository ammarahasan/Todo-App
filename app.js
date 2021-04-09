let express = require("express");
let todoController = require("./controllers/todoController");

let app = express();

app.set("view engine", "ejs");
app.use(express.static("./public"));

// controllers
todoController(app);

app.listen(3000);
console.log("Listing to port 3000: ");
