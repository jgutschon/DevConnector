const express = require('express');
const router = express.Router();

// @route   GET api/profile
// @desc    Profile test route
// @access  Public
router.get('/', (req, res) => res.send('Profiles route'));

module.exports = router;
