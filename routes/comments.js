const express = require("express");
const router = express.Router();
const db = require("../config/database");

//return all comments
router.get("", (req, res) => {
  db.comments.find({}).toArray((err, data) => {
    res.send(data);
  });
  // console.log(comments);
});

//return all post by id
router.get("/:id", (req, res) => {
  db.comments.find(db.ObjectId(req.params.id)).toArray((err, data) => {
    res.send(data);
  });
});

router.post("", (req, res) => {
  db.comments.insert(req.body).then(value => {
    res.send(value.ops);
  });
});

router.put("/:id", (req, res) => {
  db.comments.updateOne(
    { _id: db.ObjectId(req.params.id) },
    { $set: req.body },
    (err, data) => {
      res.send(data);
    }
  );
});

router.delete("/:id", (req, res) => {
  db.comments.deleteOne({ _id: db.ObjectId(req.params.id) }, (err, result) => {
    res.send(result);
  });
});

module.exports = router;
