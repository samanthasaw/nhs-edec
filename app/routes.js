// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

router.post('/submit-your-edec/sections/opening-hours/check-last-year', function (req, res) {
  let answer = req.body.openinghours;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/opening-hours/check-special-opening-hours')

  } else if (answer === 'no') {

    res.redirect('/submit-your-edec/sections/opening-hours/change-opening-hours') }

  else {
    // res.redirect('error')
    res.redirect('/submit-your-edec/errors/generic-error/')
  }
});

module.exports = router;
