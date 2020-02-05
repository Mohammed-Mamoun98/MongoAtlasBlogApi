const express = require("express");
const router = express.Router();
const db = require("../config/database");

//return all tags
router.get("", (req, res) => {
  db.tags.find({}).toArray((err, data) => {
    res.send(data);
  });
  // console.log(tags);
});

//return all post by id
router.get("/:id", (req, res) => {
  db.tags.find(db.ObjectId(req.params.id)).toArray((err, data) => {
    res.send(data);
  });
});

router.post("", (req, res) => {
  db.tags.insert(req.body).then(value => {
    res.send(value.ops);
  });
});

router.put("/:id", (req, res) => {
  db.tags.updateOne(
    { _id: db.ObjectId(req.params.id) },
    { $set: req.body },
    (err, data) => {
      res.send(data);
    }
  );
});

router.delete("/:id", (req, res) => {
  db.tags.deleteOne({ _id: db.ObjectId(req.params.id) }, (err, result) => {
    res.send(result);
  });
});

module.exports = router;
