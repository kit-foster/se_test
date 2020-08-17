const router = require('express').Router();
let User = require('../schemas/user_schema');

// handles HTTP get requests to get all users from DB
// find method returns a promise (in jSON format)
router.route('/').get((req, res) => {
  User.find()
    .then(user => res.json({ok: true}))
    .catch(err => res.status(400).json('Error: ' + err));
});

// handles HTTP post requests, allows saving of users with save method
router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;