// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

router.post('/submit-your-edec/sections/opening-hours/check-last-year', function (req, res) {
  let answer = req.body.openinghours;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/opening-hours/check-special-opening-hours')

  } else if (answer === 'no') {

    res.redirect('/submit-your-edec/sections/opening-hours/which-days') }

  else {
    // res.redirect('error')
    res.redirect('/submit-your-edec/errors/generic-error/')
  }
});


// opening-hours checkboxes

router.post('/submit-your-edec/sections/opening-hours/which-days', function (req, res) {
  let answer = req.body.daysEdit;

  if (answer.includes('monday')) {
    res.redirect('/submit-your-edec/sections/opening-hours/change-monday')
  }

  if (answer.includes('tuesday')) {
    res.redirect('/submit-your-edec/sections/opening-hours/change-tuesday')
  }

  if (answer.includes('wednesday')) {
    res.redirect('/submit-your-edec/sections/opening-hours/change-wednesday')
  }

  if (answer.includes('thursday')) {
    res.redirect('/submit-your-edec/sections/opening-hours/change-thursday')
  }

  if (answer.includes('friday')) {
    res.redirect('/submit-your-edec/sections/opening-hours/change-friday')
  }

  if (answer.includes('saturday')) {
    res.redirect('/submit-your-edec/sections/opening-hours/change-saturday')
  }

  if (answer.includes('sunday')) {
    res.redirect('/submit-your-edec/sections/opening-hours/change-sunday')
  }

});

router.post('/submit-your-edec/sections/opening-hours/change-monday', function (req, res) {
  let answer = req.session.data.daysEdit;

  if (answer) {

    if (answer.includes('tuesday')) {
      res.redirect('/submit-your-edec/sections/opening-hours/change-tuesday')
    } else if (answer.includes('wednesday')) {
      res.redirect('/submit-your-edec/sections/opening-hours/change-wednesday')
    } else if (answer.includes('thursday')) {
      res.redirect('/submit-your-edec/sections/opening-hours/change-thursday')
    } else if (answer.includes('friday')) {
      res.redirect('/submit-your-edec/sections/opening-hours/change-friday')
    } else if (answer.includes('saturday')) {
      res.redirect('/submit-your-edec/sections/opening-hours/change-saturday')
    } else if (answer.includes('sunday')) {
      res.redirect('/submit-your-edec/sections/opening-hours/change-sunday')
    } else {
      res.redirect('/submit-your-edec/sections/opening-hours/check-special-opening-hours')
    }

  } else {
    res.redirect('/submit-your-edec/sections/opening-hours/check-special-opening-hours')
  }


});

router.post('/submit-your-edec/sections/opening-hours/change-tuesday', function (req, res) {
  let answer = req.session.data.daysEdit;

  if (answer) {

    if (answer.includes('wednesday')) {
      res.redirect('/submit-your-edec/sections/opening-hours/change-wednesday')
    } else if (answer.includes('thursday')) {
      res.redirect('/submit-your-edec/sections/opening-hours/change-thursday')
    } else if (answer.includes('friday')) {
      res.redirect('/submit-your-edec/sections/opening-hours/change-friday')
    } else if (answer.includes('saturday')) {
      res.redirect('/submit-your-edec/sections/opening-hours/change-saturday')
    } else if (answer.includes('sunday')) {
      res.redirect('/submit-your-edec/sections/opening-hours/change-sunday')
    } else {
      res.redirect('/submit-your-edec/sections/opening-hours/check-special-opening-hours')
    }

  } else {
    res.redirect('/submit-your-edec/sections/opening-hours/check-special-opening-hours')
  }


});

router.post('/submit-your-edec/sections/opening-hours/change-wednesday', function (req, res) {
  let answer = req.session.data.daysEdit;

  if (answer) {

    if (answer.includes('thursday')) {
      res.redirect('/submit-your-edec/sections/opening-hours/change-thursday')
    } else if (answer.includes('friday')) {
      res.redirect('/submit-your-edec/sections/opening-hours/change-friday')
    } else if (answer.includes('saturday')) {
      res.redirect('/submit-your-edec/sections/opening-hours/change-saturday')
    } else if (answer.includes('sunday')) {
      res.redirect('/submit-your-edec/sections/opening-hours/change-sunday')
    } else {
      res.redirect('/submit-your-edec/sections/opening-hours/check-special-opening-hours')
    }

  } else {
    res.redirect('/submit-your-edec/sections/opening-hours/check-special-opening-hours')
  }


});

router.post('/submit-your-edec/sections/opening-hours/change-thursday', function (req, res) {
  let answer = req.session.data.daysEdit;

  if (answer) {

    if (answer.includes('friday')) {
      res.redirect('/submit-your-edec/sections/opening-hours/change-friday')
    } else if (answer.includes('saturday')) {
      res.redirect('/submit-your-edec/sections/opening-hours/change-saturday')
    } else if (answer.includes('sunday')) {
      res.redirect('/submit-your-edec/sections/opening-hours/change-sunday')
    } else {
      res.redirect('/submit-your-edec/sections/opening-hours/check-special-opening-hours')
    }

  } else {
    res.redirect('/submit-your-edec/sections/opening-hours/check-special-opening-hours')
  }


});

router.post('/submit-your-edec/sections/opening-hours/change-friday', function (req, res) {
  let answer = req.session.data.daysEdit;

  if (answer) {

    if (answer.includes('saturday')) {
      res.redirect('/submit-your-edec/sections/opening-hours/change-saturday')
    } else if (answer.includes('sunday')) {
      res.redirect('/submit-your-edec/sections/opening-hours/change-sunday')
    } else {
      res.redirect('/submit-your-edec/sections/opening-hours/check-special-opening-hours')
    }

  } else {
    res.redirect('/submit-your-edec/sections/opening-hours/check-special-opening-hours')
  }

});

router.post('/submit-your-edec/sections/opening-hours/change-saturday', function (req, res) {
  let answer = req.session.data.daysEdit;

  if (answer) {

    if (answer.includes('sunday')) {
      res.redirect('/submit-your-edec/sections/opening-hours/change-sunday')
    } else {
      res.redirect('/submit-your-edec/sections/opening-hours/check-special-opening-hours')
    }

  } else {
    res.redirect('/submit-your-edec/sections/opening-hours/check-special-opening-hours')
  }

});


module.exports = router;
