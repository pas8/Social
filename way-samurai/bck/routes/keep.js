const router = require('express').Router();

let Keep = require('../models/keep.model');

router.route('/').get((req, res) => {
  Keep.find()
    .then((keeps) => {
      res.json(keeps);
    })
    .catch((err) => {
      res.status(400).json('Error' + err);
    });
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const pin = req.body.pin;
  const date = req.body.date

  const newKeep = new Keep({title, description, pin, date});

  newKeep
    .save()
    .then(() => {
      res.json('Keep  added!');
    })
    .catch((err) => {
      res.status(400).json('Error' + err);
    });
});

router.route('/:id').get((req, res) => {
  Keep.findById(req.params.id)
    .then((keep) => {
      res.json(keep);
    })
    .catch((err) => {
      res.status(400).json('Error' + err);
    });
});

router.route('/:id').delete((req, res) => {
  Keep.findByIdAndDelete(req.params.id)
    .then((keep) => {
      res.json(keep);
    })
    .catch((err) => {
      res.status(400).json('Error' + err);
    });
});

router.route('/update/:id').post((req, res) => {
  Keep.findById(req.params.id)
    .then((keep) => {
      keep.title = req.body.title;
      keep.description = req.body.description;
      keep.pin = Number(req.body.pin);
      keep.date = Date.parse(req.body.date);

      keep
        .save()
        .then(() => {
          res.json('Keep updated!');
        })
        .catch((err) => {
          res.status(400).json('Error' + err);
        });
    })
    .catch((err) => {
      res.status(400).json('Error' + err);
    });
});

module.exports = router;
