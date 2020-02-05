//include express
const express = require("express");

//posts
const posts = require("./routes/posts");
//tags
const tags = require("./routes/tags");
//comments
const comments = require("./routes/comments");
//categories
const categories = require("./routes/categories");
//users
const users = require("./routes/users");

//create app
const app = express();
//use static files 
app.use(express.static("public"));
app.use(express.json());
//use router modules
app.use("/posts", posts);
app.use("/tags", tags);
app.use("/comments", comments);
app.use("/categories", categories);
app.use("/users", users);



app.listen(3000, () => {
  console.log("server is runing");
});
