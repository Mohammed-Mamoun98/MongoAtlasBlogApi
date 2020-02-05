//include mongodb
const mongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
const AtlasUrl = "mongodb+srv://admin:admin@cluster0-vvloy.mongodb.net/blogApi";
const url = "mongodb://localhost:27017/blgoAPI";
mongoClient.connect(AtlasUrl, (err, result) => {
  exports.posts = result.db().collection("posts");
  exports.comments = result.db().collection("comments");
  exports.tags = result.db().collection("tags");
  exports.users = result.db().collection("users");
  exports.categories = result.db().collection("categories");
});

exports.ObjectId = ObjectId;
