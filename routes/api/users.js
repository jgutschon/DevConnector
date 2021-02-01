const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Must be a valid email address').isEmail(),
    check('password', 'Password must be 6 or more characters').isLength({
      min: 6,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);
    res.send('User route');
  }
);

module.exports = router;
