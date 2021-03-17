const mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router(),
  bodyParser = require("body-parser");

let note = require("../models/note-schema");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.route("/create").post((req, res, next) => {
  const newNote = new note({
    title: req.body.title,
    content: req.body.content,
  });
  newNote.save(function (err) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log("Successfull");
      res.json(newNote);
    }
  });
});

router.route("/").get((req, res) => {
  note.find({}, (err, foundNote) => {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log("Note sent successfully!!");
      res.json(foundNote);
    }
  });
});

router.route("/delete/:title").delete((req, res, next) => {
  note.deleteOne({ title: req.params.title }, (err, data) => {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      res.status(200).json({
        msg: data,
      });
      console.log(req.params.title);
      console.log("Note Deleted");
    }
  });
});

// router.route('/edit/:id').get((req, res) => {
//     user.findById(req.params.id, (error, data) => {
//         if (error) {
//             return next(error)
//         } else {
//             res.json(data)
//         }
//     })
// })

// router.route('/update/:id').put((req, res, next) => {
//     user.findByIdAndUpdate(req.params.id, {
//         $set: req.body
//     }, (error, data) => {
//         if (error) {
//             return next(error);
//             console.log(error)
//         } else {
//             res.json(data)
//             console.log('User updated successfully !')
//         }
//     })
// })

module.exports = router;
