const express = require("express");
const router = express.Router();
const db = require("../config/database");

//return all posts
router.get("", (req, res) => {
  db.posts.find({}).toArray((err, data) => {
    res.send(data);
  });
  // console.log(posts);
});

//return all post by id
router.get("/:id", (req, res) => {
  db.posts.find(db.ObjectId(req.params.id)).toArray((err, data) => {
    res.send(data);
  });
});

router.post("", (req, res) => {
  db.posts.insert(req.body).then(value => {
    res.send(value.ops);
  });
});

router.put("/:id", (req, res) => {
  db.posts.updateOne(
    { _id: db.ObjectId(req.params.id) },
    { $set: req.body },
    (err, data) => {
      res.send(data);
    }
  );
});

router.delete("/:id", (req, res) => {
  db.posts.deleteOne({_id : db.ObjectId(req.params.id)} , (err , result)=>{
    res.send(result);
  })
});

module.exports = router;
