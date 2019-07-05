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

router.post('/submit-your-edec/sections/practice-details/check-last-year', function (req, res) {
  let answer = req.body.practicedetails;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/practice-details/practice-details-complete-2')

  } else if (answer === 'no') {

    res.redirect('/submit-your-edec/sections/practice-details/new-practice-details') }

  else {
    // res.redirect('error')
    res.redirect('/submit-your-edec/errors/generic-error/')
  }
});

router.post('/submit-your-edec/demos/gp-practice-name/check-last-year', function (req, res) {
  let answer = req.body.practicedetails;

  if (answer === 'yes') {

    res.redirect('#')

  } else if (answer === 'no') {

    res.redirect('/submit-your-edec/demos/gp-practice-name/new-practice-details') }

  else {
    // res.redirect('error')
    res.redirect('#')
  }
});

router.post('/submit-your-edec/demos/organisation-type/check-last-year', function (req, res) {
  let answer = req.body.practicedetails;

  if (answer === 'yes') {

    res.redirect('#')

  } else if (answer === 'no') {

    res.redirect('/submit-your-edec/demos/organisation-type/new-practice-details') }

  else {
    // res.redirect('error')
    res.redirect('#')
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


// which task list
router.get('/submit-your-edec/task-list/redirect', function (req, res) {

  res.redirect('/submit-your-edec/task-list/task-list-with-sections-2')

});




//
// v2 change opening times
//

// Monday
router.post('/submit-your-edec/sections/opening-hours/v2/change-monday', function (req, res) {
  let answer = req.body.gov;

  if (answer == "open") {
    // grab all data
    // keep adding to string if ODS3 etc. is true?

    // one
    let time1 = req.body.ODS2;
    let ampm1 = req.body.ampm;
    let time2 = req.body.ODS;
    let ampm2 = req.body.ampm1;
    let rowOne = time1 + ampm1 + " to " + time2 + ampm2;

    // two
    let time3 = req.body.ODS3;
    let ampm3 = req.body.ampm3;
    let time4 = req.body.ODS4;
    let ampm4 = req.body.ampm4;
    let rowTwo = time3 + ampm3 + " to " + time4 + ampm4;

    // three
    let time5 = req.body.ODS5;
    let ampm5 = req.body.ampm5;
    let time6 = req.body.ODS6;
    let ampm6 = req.body.ampm6;
    let rowThree = time5 + ampm5 + " to " + time6 + ampm6;

    if (rowOne && req.body.ODS3 && req.body.ODS5) {
      req.session.data.mondayOpeningHours = rowOne + "<br />" + rowTwo + "<br />" + rowThree
    } else if (rowOne && req.body.ODS3) {
      req.session.data.mondayOpeningHours = rowOne + "<br />" + rowTwo
    } else {
      req.session.data.mondayOpeningHours = rowOne
    }

    res.redirect('/submit-your-edec/sections/opening-hours/v2/new-opening-hours')

  } else {
    // set data to Closed
    // redirect to v2 check
    req.session.data.mondayOpeningHours = "Closed";
    res.redirect('/submit-your-edec/sections/opening-hours/v2/new-opening-hours')
  }

});


module.exports = router;
