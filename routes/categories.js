const express = require("express");
const router = express.Router();
const db = require("../config/database");

//return all categories
router.get("", (req, res) => {
  db.categories.find({}).toArray((err, data) => {
    res.send(data);
  });
  // console.log(categories);
});

//return all post by id
router.get("/:id", (req, res) => {
  db.categories.find(db.ObjectId(req.params.id)).toArray((err, data) => {
    res.send(data);
  });
});

router.post("", (req, res) => {
  db.categories.insert(req.body).then(value => {
    res.send(value.ops);
  });
});

router.put("/:id", (req, res) => {
  db.categories.updateOne(
    { _id: db.ObjectId(req.params.id) },
    { $set: req.body },
    (err, data) => {
      res.send(data);
    }
  );
});

router.delete("/:id", (req, res) => {
  db.categories.deleteOne(
    { _id: db.ObjectId(req.params.id) },
    (err, result) => {
      res.send(result);
    }
  );
});

module.exports = router;
