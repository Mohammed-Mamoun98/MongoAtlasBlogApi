const express = require("express");
const router = express.Router();
const db = require("../config/database");

//return all users
router.get("", (req, res) => {
  db.users.find({}).toArray((err, data) => {
    res.send(data);
  });
  // console.log(users);
});

//return all post by id
router.get("/:id", (req, res) => {
  db.users.find(db.ObjectId(req.params.id)).toArray((err, data) => {
    res.send(data);
  });
});

router.post("", (req, res) => {
  db.users.insert(req.body).then(value => {
    res.send(value.ops);
  });
});

router.put("/:id", (req, res) => {
  db.users.updateOne(
    { _id: db.ObjectId(req.params.id) },
    { $set: req.body },
    (err, data) => {
      res.send(data);
    }
  );
});

router.delete("/:id", (req, res) => {
  db.users.deleteOne({ _id: db.ObjectId(req.params.id) }, (err, result) => {
    res.send(result);
  });
});

module.exports = router;
