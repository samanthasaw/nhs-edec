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

// practice details

router.post('/submit-your-edec/sections/practice-details/return-user/check-last-year', function (req, res) {
  let answer = req.body.practicedetails;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/practice-details/return-user/catchment-area/catchment-card')

  } else if (answer === 'no') {

    res.redirect('/submit-your-edec/sections/practice-details/return-user/new-practice-details-2') }

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



router.post('/submit-your-edec/sections/practice-details/return-user/contract-type', function (req, res) {
  let answer = req.body.contractType;

  if (answer === 'apms') {

    res.redirect('/submit-your-edec/sections/practice-details/return-user/apms-contract-dates')

  } else {
    // res.redirect('error')
    res.redirect('/submit-your-edec/sections/practice-details/return-user/new-practice-details')
  }
});




router.post('/submit-your-edec/sections/practice-details/return-user/apms-contract-dates', function (req, res) {
  let answer = req.body.apmscontract;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/practice-details/return-user/new-practice-details-2')

  } else {
    // res.redirect('error')
    res.redirect('/submit-your-edec/sections/practice-details/return-user/contract-start-date-apms')
  }
});



router.post('/submit-your-edec/sections/practice-details/return-user/catchment-area/check-your-catchment', function (req, res) {
  let answer = req.body.checkCatchment;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/practice-details/return-user/practice-details-complete-3')

  } else {

    res.redirect('/submit-your-edec/sections/practice-details/return-user/catchment-area/change-your-catchment')
  }
});



router.post('/submit-your-edec/sections/practice-details/return-user/catchment-area/check-your-branch-catchment', function (req, res) {
  let answer = req.body.checkBranchCatchment;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/practice-details/return-user/practice-details-complete-3')

  } else {

    res.redirect('/submit-your-edec/sections/practice-details/return-user/catchment-area/change-your-branch-catchment')
  }
});



router.post('/submit-your-edec/sections/practice-details/new-user/catchment-area/is-catchment-same', function (req, res) {
  let answer = req.body.branchSame;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/practice-details/new-user/practice-details-complete-3')

  } else {

    res.redirect('/submit-your-edec/sections/practice-details/new-user/catchment-area/submit-your-branch-catchment')
  }
});



router.post('/submit-your-edec/sections/practice-details/return-user/branches', function (req, res) {
  let answer = req.body.branches;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/practice-details/return-user/found-branches')

  } else {

    res.redirect('/submit-your-edec/sections/practice-details/return-user/practice-details-complete-2')
  }
});


router.post('/submit-your-edec/sections/practice-details/return-user/change-branches', function (req, res) {
  let answer = req.body.branches;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/practice-details/return-user/change-tick-branches')

  } else {

    res.redirect('/submit-your-edec/sections/practice-details/return-user/change-practice-details-2')
  }
});




router.post('/submit-your-edec/sections/practice-details/new-user/branches', function (req, res) {
  let answer = req.body.branches;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/practice-details/new-user/branch-names')

  } else {

    res.redirect('/submit-your-edec/sections/practice-details/new-user/check-your-answers')
  }
});



// staff details


router.post('/submit-your-edec/sections/practice-staff/return-user/check-last-year', function (req, res) {
  let answer = req.body.staffDetails;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/practice-staff/return-user/locum-sessions')

  } else if (answer === 'no') {

    res.redirect('/submit-your-edec/sections/practice-staff/return-user/new-staff-details') }

  else {
    // res.redirect('error')
    res.redirect('/submit-your-edec/errors/generic-error/')
  }
});



// premises and equipment details

router.post('/submit-your-edec/sections/premises-equipment/return-user/check-last-year', function (req, res) {
  let answer = req.body.premisesDetails;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/premises-equipment/return-user/premises-details-complete')

  } else if (answer === 'no') {

    res.redirect('/submit-your-edec/sections/premises-equipment/return-user/new-premises-details') }

  else {
    // res.redirect('error')
    res.redirect('/submit-your-edec/errors/generic-error/')
  }
});

router.post('/submit-your-edec/sections/premises-equipment/return-user/wheelchair', function (req, res) {
  let answer = req.body.wheelchair;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/premises-equipment/return-user/new-premises-details')

} else {

    res.redirect('/submit-your-edec/sections/premises-equipment/return-user/wheelchair-arrangements-conditional')
  }
});


router.post('/submit-your-edec/sections/premises-equipment/return-user/wheelchair-arrangements', function (req, res) {
  let answer = req.body.wheelchairArrangements;

  if (answer.includes('other')) {

    res.redirect('/submit-your-edec/sections/premises-equipment/return-user/wheelchair-other')

} else {
    // res.redirect('error')
    res.redirect('/submit-your-edec/sections/premises-equipment/return-user/new-premises-details')
  }
});


router.post('/submit-your-edec/sections/premises-equipment/return-user/change-wheelchair', function (req, res) {
  let answer = req.body.wheelchair;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/premises-equipment/return-user/change-premises-details')

  } else if (answer === 'no') {

    res.redirect('/submit-your-edec/sections/premises-equipment/return-user/change-wheelchair-arrangements-conditional') }

  else {
    // res.redirect('error')
    res.redirect('/submit-your-edec/errors/generic-error/')
  }
});





router.post('/submit-your-edec/sections/premises-equipment/new-user/wheelchair', function (req, res) {
  let answer = req.body.wheelchair;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/premises-equipment/new-user/check-your-answers')

  } else if (answer === 'no') {

    res.redirect('/submit-your-edec/sections/premises-equipment/new-user/wheelchair-arrangements-conditional') }

  else {
    // res.redirect('error')
    res.redirect('/submit-your-edec/errors/generic-error/')
  }
});



router.post('/submit-your-edec/sections/premises-equipment/new-user/change-wheelchair', function (req, res) {
  let answer = req.body.wheelchair;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/premises-equipment/new-user/check-your-answers')

  } else if (answer === 'no') {

    res.redirect('/submit-your-edec/sections/premises-equipment/new-user/change-wheelchair-arrangements-conditional') }

  else {
    // res.redirect('error')
    res.redirect('/submit-your-edec/errors/generic-error/')
  }
});

router.post('/submit-your-edec/sections/premises-equipment/new-user/wheelchair-arrangements', function (req, res) {
  let answer = req.body.wheelchairArrangements;

  if (answer.includes('other')) {

    res.redirect('/submit-your-edec/sections/premises-equipment/new-user/wheelchair-other')

} else {
    res.redirect('/submit-your-edec/sections/premises-equipment/new-user/check-your-answers')
  }
});


router.post('/submit-your-edec/sections/premises-equipment/new-user/change-wheelchair-arrangements', function (req, res) {
  let answer = req.body.wheelchairArrangements;

  if (answer.includes('other')) {

    res.redirect('/submit-your-edec/sections/premises-equipment/new-user/change-wheelchair-other')

} else {
    res.redirect('/submit-your-edec/sections/premises-equipment/new-user/check-your-answers')
  }
});


router.post('/submit-your-edec/sections/premises-equipment/new-user/change-wheelchair-2', function (req, res) {
  let answer = req.body.wheelchair;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/premises-equipment/new-user/change-premises-details')

  } else if (answer === 'no') {

    res.redirect('/submit-your-edec/sections/premises-equipment/new-user/change-wheelchair-arrangements-conditional-2') }

  else {
    // res.redirect('error')
    res.redirect('/submit-your-edec/errors/generic-error/')
  }
});

// practice services

router.post('/submit-your-edec/sections/practice-services/new-user/provision-care', function (req, res) {
  let answer = req.body.provision;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/practice-services/new-user/sub-contracts-provision')

  }   else {

    res.redirect('/submit-your-edec/sections/practice-services/new-user/quality-ooh') }

});


router.post('/submit-your-edec/sections/practice-services/new-user/interpreting-2', function (req, res) {
  let answer = req.body.selectInterpret;

  if (answer === 'noInterpret') {

    res.redirect('/submit-your-edec/sections/practice-services/new-user/review-website')

  }   else {

    res.redirect('/submit-your-edec/sections/practice-services/new-user/funds-interpreting') }

});


router.post('/submit-your-edec/sections/practice-services/new-user/change-provision-care', function (req, res) {
  let answer = req.body.provision;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/practice-services/new-user/change-sub-contracts-provision')

  }   else {

    res.redirect('/submit-your-edec/sections/practice-services/new-user/change-quality-ooh') }

});


router.post('/submit-your-edec/sections/practice-services/new-user/change-interpreting-2', function (req, res) {
  let answer = req.body.selectInterpret;

  if (answer === 'noInterpret') {

    res.redirect('/submit-your-edec/sections/practice-services/new-user/check-your-answers')

  }   else {

    res.redirect('/submit-your-edec/sections/practice-services/new-user/change-funds-interpreting') }

});


router.post('/submit-your-edec/sections/practice-services/new-user/change-provision-care-2', function (req, res) {
  let answer = req.body.provision;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/practice-services/new-user/change-sub-contracts-provision-2')

  }   else {

    res.redirect('/submit-your-edec/sections/practice-services/new-user/change-quality-ooh-2') }

});


router.post('/submit-your-edec/sections/practice-services/new-user/change-interpreting-2-2', function (req, res) {
  let answer = req.body.selectInterpret;

  if (answer === 'noInterpret') {

    res.redirect('/submit-your-edec/sections/practice-services/new-user/check-your-answers')

  }   else {

    res.redirect('/submit-your-edec/sections/practice-services/new-user/change-funds-interpreting-2') }

});





router.post('/submit-your-edec/sections/practice-services/opening-hours/new-user/regular/regular-periods', function (req, res) {
  let answer = req.body.regularPeriods;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/regular/which-days-regular-periods')

  }   else {

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/intermittent/intermittent-periods') }

});

router.post('/submit-your-edec/sections/practice-services/opening-hours/new-user/intermittent-periods', function (req, res) {
  let answer = req.body.intermittentPeriods;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/intermittent/which-days-intermittent-closure')

  }   else {

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/intermittent/closed-each-week') }

});


router.post('/submit-your-edec/sections/practice-services/opening-hours/new-user/extended/extended-hours-per-week', function (req, res) {
  let answer = req.body.extendHours;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/extended/number-of-extended-hours')

  }   else {

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/extended/check-extended-hours') }

});

router.post('/submit-your-edec/sections/practice-services/opening-hours/new-user/extended/change-extended-hours-per-week', function (req, res) {
  let answer = req.body.extendHours;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/extended/number-of-extended-hours')

  }   else {

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/extended/check-extended-hours') }

});


router.post('/submit-your-edec/sections/practice-services/opening-hours/return-user/extended/extended-hours-per-week', function (req, res) {
  let answer = req.body.extendHours;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/extended/number-of-extended-hours')

  }   else {

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/extended/check-extended-hours') }

});


router.post('/submit-your-edec/sections/practice-services/opening-hours/return-user/extended/change-extended-hours-per-week', function (req, res) {
  let answer = req.body.extendHours;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/extended/change-number-of-extended-hours-2')

  }   else {

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/extended/change-extended-hours') }

});

// practice services

router.post('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/which-days-reception', function (req, res) {
  let answer = req.body.receptionEdit;

  if (answer.includes('monday')) {
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-monday')
  }

  if (answer.includes('tuesday')) {
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-tuesday')
  }

  if (answer.includes('wednesday')) {
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-wednesday')
  }

  if (answer.includes('thursday')) {
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-thursday')
  }

  if (answer.includes('friday')) {
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-friday')
  }

  if (answer.includes('saturday')) {
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-saturday')
  }

  if (answer.includes('sunday')) {
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-sunday')
  }

});

router.post('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-monday', function (req, res) {
  let answer = req.session.data.receptionEdit;

  if (answer) {

    if (answer.includes('tuesday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-tuesday')
    } else if (answer.includes('wednesday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-wednesday')
    } else if (answer.includes('thursday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-thursday')
    } else if (answer.includes('friday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-friday')
    } else if (answer.includes('saturday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-saturday')
    } else if (answer.includes('sunday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-sunday')
    } else {
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/check-reception-answers')
  }}


});

router.post('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-tuesday', function (req, res) {
  let answer = req.session.data.receptionEdit;

  if (answer) {

    if (answer.includes('wednesday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-wednesday')
    } else if (answer.includes('thursday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-thursday')
    } else if (answer.includes('friday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-friday')
    } else if (answer.includes('saturday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-saturday')
    } else if (answer.includes('sunday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-sunday')
    } else {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/check-reception-answers')
    }}

});

router.post('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-wednesday', function (req, res) {
  let answer = req.session.data.receptionEdit;

  if (answer) {

    if (answer.includes('thursday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-thursday')
    } else if (answer.includes('friday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-friday')
    } else if (answer.includes('saturday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-saturday')
    } else if (answer.includes('sunday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-sunday')
    } else {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/check-reception-answers')
    }}


});


router.post('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-thursday', function (req, res) {
  let answer = req.session.data.receptionEdit;

  if (answer) {

    if (answer.includes('friday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-friday')
    } else if (answer.includes('saturday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-saturday')
    } else if (answer.includes('sunday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-sunday')
    } else {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/check-reception-answers')
    }}

});

router.post('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-friday', function (req, res) {
  let answer = req.session.data.receptionEdit;

  if (answer) {

    if (answer.includes('saturday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-saturday')
    } else if (answer.includes('sunday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-sunday')
    } else {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/check-reception-answers')
    }}

});


router.post('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-saturday', function (req, res) {
  let answer = req.session.data.receptionEdit;

  if (answer) {

    if (answer.includes('sunday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-sunday')
    } else {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/check-reception-answers')
    }}

});

router.post('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/reception-sunday', function (req, res) {
  let answer = req.session.data.receptionEdit;


      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/reception/check-reception-answers')


});






router.post('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/which-days-phone', function (req, res) {
  let answer = req.body.phoneEdit;

  if (answer.includes('monday')) {
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/monday-phone')
  }

  if (answer.includes('tuesday')) {
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/tuesday-phone')
  }

  if (answer.includes('wednesday')) {
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/wednesday-phone')
  }

  if (answer.includes('thursday')) {
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/thursday-phone')
  }

  if (answer.includes('friday')) {
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/friday-phone')
  }

  if (answer.includes('saturday')) {
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/saturday-phone')
  }

  if (answer.includes('sunday')) {
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/sunday-phone')
  }

});

router.post('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/monday-phone', function (req, res) {
  let answer = req.session.data.phoneEdit;

  if (answer) {

    if (answer.includes('tuesday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/tuesday-phone')
    } else if (answer.includes('wednesday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/wednesday-phone')
    } else if (answer.includes('thursday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/thursday-phone')
    } else if (answer.includes('friday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/friday-phone')
    } else if (answer.includes('saturday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/saturday-phone')
    } else if (answer.includes('sunday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/sunday-phone')
    } else {
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/check-phone-answers')
  }}


});

router.post('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/tuesday-phone', function (req, res) {
  let answer = req.session.data.phoneEdit;

  if (answer) {

    if (answer.includes('wednesday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/wednesday-phone')
    } else if (answer.includes('thursday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/thursday-phone')
    } else if (answer.includes('friday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/friday-phone')
    } else if (answer.includes('saturday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/saturday-phone')
    } else if (answer.includes('sunday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/sunday-phone')
    } else {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/check-phone-answers')
    }}

});

router.post('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/wednesday-phone', function (req, res) {
  let answer = req.session.data.phoneEdit;

  if (answer) {

    if (answer.includes('thursday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/thursday-phone')
    } else if (answer.includes('friday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/friday-phone')
    } else if (answer.includes('saturday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/saturday-phone')
    } else if (answer.includes('sunday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/sunday-phone')
    } else {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/check-phone-answers')
    }}


});


router.post('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/thursday-phone', function (req, res) {
  let answer = req.session.data.phoneEdit;

  if (answer) {

    if (answer.includes('friday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/friday-phone')
    } else if (answer.includes('saturday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/saturday-phone')
    } else if (answer.includes('sunday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/sunday-phone')
    } else {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/check-phone-answers')
    }}

});

router.post('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/friday-phone', function (req, res) {
  let answer = req.session.data.phoneEdit;

  if (answer) {

    if (answer.includes('saturday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/saturday-phone')
    } else if (answer.includes('sunday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/sunday-phone')
    } else {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/check-phone-answers')
    }}

});


router.post('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/saturday-phone', function (req, res) {
  let answer = req.session.data.phoneEdit;

  if (answer) {

    if (answer.includes('sunday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/sunday-phone')
    } else {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/check-phone-answers')
    }}

});

router.post('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/sunday-phone', function (req, res) {
  let answer = req.session.data.phoneEdit;

      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/phone/check-phone-answers')

});






router.post('/submit-your-edec/sections/practice-services/opening-hours/new-user/regular/which-days-regular-periods', function (req, res) {
  let answer = req.body.regEdit;

  if (answer.includes('monday')) {
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/regular/regular-periods-closed-monday')
  }

  if (answer.includes('tuesday')) {
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/regular/regular-periods-closed-tuesday')
  }

  if (answer.includes('wednesday')) {
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/regular/regular-periods-closed-wednesday')
  }

  if (answer.includes('thursday')) {
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/regular/regular-periods-closed-thursday')
  }

  if (answer.includes('friday')) {
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/regular/regular-periods-closed-friday')
  }

});

router.post('/submit-your-edec/sections/practice-services/opening-hours/new-user/regular/regular-periods-closed-monday', function (req, res) {
  let answer = req.session.data.regEdit;

  if (answer) {

    if (answer.includes('tuesday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/regular/regular-periods-closed-tuesday')
    } else if (answer.includes('wednesday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/regular/regular-periods-closed-wednesday')
    } else if (answer.includes('thursday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/regular/regular-periods-closed-thursday')
    } else if (answer.includes('friday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/regular/regular-periods-closed-friday')
    } else {
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/regular/check-regular-periods')
  }}


});

router.post('/submit-your-edec/sections/practice-services/opening-hours/new-user/regular/regular-periods-closed-tuesday', function (req, res) {
  let answer = req.session.data.regEdit;

  if (answer) {

    if (answer.includes('wednesday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/regular/regular-periods-closed-wednesday')
    } else if (answer.includes('thursday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/regular/regular-periods-closed-thursday')
    } else if (answer.includes('friday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/regular/regular-periods-closed-friday')
    } else {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/regular/check-regular-periods')
    }}

});

router.post('/submit-your-edec/sections/practice-services/opening-hours/new-user/regular/regular-periods-closed-wednesday', function (req, res) {
  let answer = req.session.data.regEdit;

  if (answer) {

    if (answer.includes('thursday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/regular/regular-periods-closed-thursday')
    } else if (answer.includes('friday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/regular/regular-periods-closed-friday')
    } else {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/regular/check-regular-periods')
    }}


});


router.post('/submit-your-edec/sections/practice-services/opening-hours/new-user/regular/regular-periods-closed-thursday', function (req, res) {
  let answer = req.session.data.regEdit;

  if (answer) {

    if (answer.includes('friday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/regular/regular-periods-closed-friday')
    } else {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/regular/check-regular-periods')
    }}

});

router.post('/submit-your-edec/sections/practice-services/opening-hours/new-user/regular/regular-periods-closed-friday', function (req, res) {
  let answer = req.session.data.regEdit;


      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/regular/check-regular-periods')

});




router.post('/submit-your-edec/sections/practice-services/opening-hours/return-user/intermittent/intermittent-closed-monday-time', function (req, res) {
  let answer = req.body.intermittentMondayOpen;

  if (answer === 'closed') {

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/intermittent/check-intermittent-periods')

  }   else {

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/intermittent/intermittent-closed-monday-frequency') }

});



router.post('/submit-your-edec/sections/practice-services/opening-hours/return-user/intermittent/intermittent-closed-tuesday-time', function (req, res) {
  let answer = req.body.intermittentTuesdayOpen;

  if (answer === 'closed') {

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/intermittent/check-intermittent-periods')

  }   else {

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/intermittent/intermittent-closed-tuesday-frequency') }

});



router.post('/submit-your-edec/sections/practice-services/opening-hours/return-user/intermittent/intermittent-closed-wednesday-time', function (req, res) {
  let answer = req.body.intermittentWednesdayOpen;

  if (answer === 'closed') {

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/intermittent/check-intermittent-periods')

  }   else {

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/intermittent/intermittent-closed-wednesday-frequency') }

});


router.post('/submit-your-edec/sections/practice-services/opening-hours/return-user/intermittent/intermittent-closed-thursday-time', function (req, res) {
  let answer = req.body.intermittentThursdayOpen;

  if (answer === 'closed') {

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/intermittent/check-intermittent-periods')

  }   else {

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/intermittent/intermittent-closed-thursday-frequency') }

});


router.post('/submit-your-edec/sections/practice-services/opening-hours/return-user/intermittent/intermittent-closed-friday-time', function (req, res) {
  let answer = req.body.intermittentFridayOpen;

  if (answer === 'closed') {

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/intermittent/check-intermittent-periods')

  }   else {

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/intermittent/intermittent-closed-friday-frequency') }

});



router.post('/submit-your-edec/sections/practice-services/opening-hours/return-user/intermittent/change-intermittent-closed-monday-time', function (req, res) {
  let answer = req.body.intermittentMondayOpen;

  if (answer === 'closed') {

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/intermittent/change-intermittent-hours')

  }   else {

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/intermittent/change-intermittent-closed-monday-frequency') }

});



router.post('/submit-your-edec/sections/practice-services/opening-hours/return-user/intermittent/change-intermittent-closed-tuesday-time', function (req, res) {
  let answer = req.body.intermittentTuesdayOpen;

  if (answer === 'closed') {

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/intermittent/change-intermittent-hours')

  }   else {

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/intermittent/change-intermittent-closed-tuesday-frequency') }

});



router.post('/submit-your-edec/sections/practice-services/opening-hours/return-user/intermittent/change-intermittent-closed-wednesday-time', function (req, res) {
  let answer = req.body.intermittentWednesdayOpen;

  if (answer === 'closed') {

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/intermittent/change-intermittent-hours')

  }   else {

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/intermittent/change-intermittent-closed-wednesday-frequency') }

});


router.post('/submit-your-edec/sections/practice-services/opening-hours/return-user/intermittent/change-intermittent-closed-thursday-time', function (req, res) {
  let answer = req.body.intermittentThursdayOpen;

  if (answer === 'closed') {

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/intermittent/change-intermittent-hours')

  }   else {

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/intermittent/change-intermittent-closed-thursday-frequency') }

});


router.post('/submit-your-edec/sections/practice-services/opening-hours/return-user/intermittent/change-intermittent-closed-friday-time', function (req, res) {
  let answer = req.body.intermittentFridayOpen;

  if (answer === 'closed') {

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/intermittent/change-intermittent-hours')

  }   else {

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/intermittent/change-intermittent-closed-friday-frequency') }

});




router.post('/submit-your-edec/sections/practice-services/opening-hours/new-user/intermittent/which-days-intermittent-closure', function (req, res) {
  let answer = req.body.intermittentEdit;

  if (answer.includes('monday')) {
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/intermittent/intermittent-closed-monday-time')
  }

  if (answer.includes('tuesday')) {
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/intermittent/intermittent-closed-tuesday-time')
  }

  if (answer.includes('wednesday')) {
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/intermittent/intermittent-closed-wednesday-time')
  }

  if (answer.includes('thursday')) {
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/intermittent/intermittent-closed-thursday-time')
  }

  if (answer.includes('friday')) {
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/intermittent/intermittent-closed-friday-time')
  }

});

router.post('/submit-your-edec/sections/practice-services/opening-hours/new-user/intermittent/intermittent-closed-monday-frequency', function (req, res) {
  let answer = req.session.data.intermittentEdit;

  if (answer) {

    if (answer.includes('tuesday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/intermittent/intermittent-closed-tuesday-time')
    } else if (answer.includes('wednesday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/intermittent/intermittent-closed-wednesday-time')
    } else if (answer.includes('thursday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/intermittent/intermittent-closed-thursday-time')
    } else if (answer.includes('friday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/intermittent/intermittent-closed-friday-time')
    } else {
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/intermittent/closed-each-week')
  }}


});

router.post('/submit-your-edec/sections/practice-services/opening-hours/new-user/intermittent/intermittent-closed-tuesday-frequency', function (req, res) {
  let answer = req.session.data.intermittentEdit;

  if (answer) {

    if (answer.includes('wednesday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/intermittent/intermittent-closed-wednesday-time')
    } else if (answer.includes('thursday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/intermittent/intermittent-closed-thursday-time')
    } else if (answer.includes('friday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/intermittent/intermittent-closed-friday-time')
    } else {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/intermittent/closed-each-week')
    }}

});

router.post('/submit-your-edec/sections/practice-services/opening-hours/new-user/intermittent/intermittent-closed-wednesday-frequency', function (req, res) {
  let answer = req.session.data.intermittentEdit;

  if (answer) {

    if (answer.includes('thursday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/intermittent/intermittent-closed-thursday-time')
    } else if (answer.includes('friday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/intermittent/intermittent-closed-friday-time')
    } else {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/intermittent/closed-each-week')
    }}


});


router.post('/submit-your-edec/sections/practice-services/opening-hours/new-user/intermittent/intermittent-closed-thursday-frequency', function (req, res) {
  let answer = req.session.data.intermittentEdit;

  if (answer) {

    if (answer.includes('friday')) {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/intermittent/intermittent-closed-friday-time')
    } else {
      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/intermittent/closed-each-week')
    }}

});

router.post('/submit-your-edec/sections/practice-services/opening-hours/new-user/intermittent/intermittent-closed-friday-frequency', function (req, res) {
  let answer = req.session.data.intermittentEdit;

      res.redirect('/submit-your-edec/sections/practice-services/opening-hours/new-user/intermittent/closed-each-week')

});






router.post('/submit-your-edec/sections/supporting-information/branches/branch-reception/is-branch-same', function (req, res) {
  let answer = req.body.branchHours;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/is-branch-phone-same')

  }   else {

    res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/which-days-branch') }

});

router.post('/submit-your-edec/sections/supporting-information/branches/branch-phone/is-branch-phone-same', function (req, res) {
  let answer = req.body.branchPhoneHours;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-hours-complete')

  }   else {

    res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/which-days-branch-phone') }

});




router.post('/submit-your-edec/sections/supporting-information/branches/branch-reception/which-days-branch', function (req, res) {
  let answer = req.body.branchDays;

  if (answer.includes('monday')) {
    res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-monday')
  }

  if (answer.includes('tuesday')) {
    res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-tuesday')
  }

  if (answer.includes('wednesday')) {
    res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-wednesday')
  }

  if (answer.includes('thursday')) {
    res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-thursday')
  }

  if (answer.includes('friday')) {
    res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-friday')
  }

  if (answer.includes('saturday')) {
    res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-saturday')
  }

  if (answer.includes('sunday')) {
    res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-sunday')
  }

});

router.post('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-monday', function (req, res) {
  let answer = req.session.data.branchDays;

  if (answer) {

    if (answer.includes('tuesday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-tuesday')
    } else if (answer.includes('wednesday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-wednesday')
    } else if (answer.includes('thursday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-thursday')
    } else if (answer.includes('friday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-friday')
    } else if (answer.includes('saturday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-saturday')
    } else if (answer.includes('sunday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-sunday')
    } else {
    res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/check-branch-hours')
  }}


});

router.post('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-tuesday', function (req, res) {
  let answer = req.session.data.branchDays;

  if (answer) {

    if (answer.includes('wednesday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-wednesday')
    } else if (answer.includes('thursday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-thursday')
    } else if (answer.includes('friday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-friday')
    } else if (answer.includes('saturday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-saturday')
    } else if (answer.includes('sunday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-sunday')
    } else {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/check-branch-hours')
    }}

});

router.post('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-wednesday', function (req, res) {
  let answer = req.session.data.branchDays;

  if (answer) {

    if (answer.includes('thursday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-thursday')
    } else if (answer.includes('friday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-friday')
    } else if (answer.includes('saturday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-saturday')
    } else if (answer.includes('sunday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-sunday')
    } else {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/check-branch-hours')
    }}


});


router.post('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-thursday', function (req, res) {
  let answer = req.session.data.branchDays;

  if (answer) {

    if (answer.includes('friday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-friday')
    } else if (answer.includes('saturday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-saturday')
    } else if (answer.includes('sunday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-sunday')
    } else {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/check-branch-hours')
    }}

});

router.post('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-friday', function (req, res) {
  let answer = req.session.data.branchDays;

  if (answer) {

    if (answer.includes('saturday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-saturday')
    } else if (answer.includes('sunday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-sunday')
    } else {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/check-branch-hours')
    }}

});

router.post('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-saturday', function (req, res) {
  let answer = req.session.data.branchDays;

  if (answer) {

    if (answer.includes('sunday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-sunday')
    } else {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/check-branch-hours')
    }}

});


router.post('/submit-your-edec/sections/supporting-information/branches/branch-reception/branch-sunday', function (req, res) {
  let answer = req.session.data.branchDays;


      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-reception/check-branch-hours')

});






router.post('/submit-your-edec/sections/supporting-information/branches/branch-phone/which-days-branch-phone', function (req, res) {
  let answer = req.body.branchDaysPhone;

  if (answer.includes('monday')) {
    res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-monday')
  }

  if (answer.includes('tuesday')) {
    res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-tuesday')
  }

  if (answer.includes('wednesday')) {
    res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-wednesday')
  }

  if (answer.includes('thursday')) {
    res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-thursday')
  }

  if (answer.includes('friday')) {
    res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-friday')
  }

  if (answer.includes('saturday')) {
    res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-saturday')
  }

  if (answer.includes('sunday')) {
    res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-sunday')
  }

});

router.post('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-monday', function (req, res) {
  let answer = req.session.data.branchDaysPhone;

  if (answer) {

    if (answer.includes('tuesday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-tuesday')
    } else if (answer.includes('wednesday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-wednesday')
    } else if (answer.includes('thursday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-thursday')
    } else if (answer.includes('friday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-friday')
    } else if (answer.includes('saturday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-saturday')
    } else if (answer.includes('sunday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-sunday')
    } else {
    res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/check-branch-phone-hours')
  }}


});

router.post('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-tuesday', function (req, res) {
  let answer = req.session.data.branchDaysPhone;

  if (answer) {

    if (answer.includes('wednesday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-wednesday')
    } else if (answer.includes('thursday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-thursday')
    } else if (answer.includes('friday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-friday')
    } else if (answer.includes('saturday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-saturday')
    } else if (answer.includes('sunday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-sunday')
    } else {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/check-branch-phone-hours')
    }}

});

router.post('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-wednesday', function (req, res) {
  let answer = req.session.data.branchDaysPhone;

  if (answer) {

    if (answer.includes('thursday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-thursday')
    } else if (answer.includes('friday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-friday')
    } else if (answer.includes('saturday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-saturday')
    } else if (answer.includes('sunday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-sunday')
    } else {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/check-branch-phone-hours')
    }}


});


router.post('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-thursday', function (req, res) {
  let answer = req.session.data.branchDaysPhone;

  if (answer) {

    if (answer.includes('friday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-friday')
    } else if (answer.includes('saturday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-saturday')
    } else if (answer.includes('sunday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-sunday')
    } else {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/check-branch-phone-hours')
    }}

});

router.post('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-friday', function (req, res) {
  let answer = req.session.data.branchDaysPhone;

  if (answer) {

    if (answer.includes('saturday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-saturday')
    } else if (answer.includes('sunday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-sunday')
    } else {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/check-branch-phone-hours')
    }}

});

router.post('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-saturday', function (req, res) {
  let answer = req.session.data.branchDaysPhone;

  if (answer) {

    if (answer.includes('sunday')) {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-sunday')
    } else {
      res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/check-branch-phone-hours')
    }}

});


router.post('/submit-your-edec/sections/supporting-information/branches/branch-phone/branch-phone-sunday', function (req, res) {
  let answer = req.session.data.branchDaysPhone;


  res.redirect('/submit-your-edec/sections/supporting-information/branches/branch-phone/check-branch-phone-hours')

});


// procedures details

router.post('/submit-your-edec/sections/practice-procedures/return-user/check-last-year-1', function (req, res) {
  let answer = req.body.communicatingPatientsDetails;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/practice-procedures/return-user/new-question-card')

  } else if (answer === 'no') {

    res.redirect('/submit-your-edec/sections/practice-procedures/return-user/new-communicating-details') }

  else {
    // res.redirect('error')
    res.redirect('/submit-your-edec/errors/generic-error/')
  }
});

router.post('/submit-your-edec/sections/practice-procedures/return-user/check-last-year-2', function (req, res) {
  let answer = req.body.medicationDetails;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/practice-procedures/return-user/procedures-details-complete')

  } else if (answer === 'no') {

    res.redirect('/submit-your-edec/sections/practice-procedures/return-user/new-medication-details') }

  else {
    // res.redirect('error')
    res.redirect('/submit-your-edec/errors/generic-error/')
  }
});



// information governance details


router.post('/submit-your-edec/sections/information-governance/return-user/check-last-year', function (req, res) {
  let answer = req.body.governanceDetails;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/information-governance/return-user/new-question-card')

  } else if (answer === 'no') {

    res.redirect('/submit-your-edec/sections/information-governance/return-user/new-governance-details') }

  else {
    // res.redirect('error')
    res.redirect('/submit-your-edec/errors/generic-error/')
  }
});

// CQC registration details


router.post('/submit-your-edec/sections/cqc-registration/return-user/check-last-year', function (req, res) {
  let answer = req.body.cqcDetails;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/cqc-registration/return-user/cqc-details-complete')

  } else if (answer === 'no') {

    res.redirect('/submit-your-edec/sections/cqc-registration/return-user/new-cqc-details') }

  else {
    // res.redirect('error')
    res.redirect('/submit-your-edec/errors/generic-error/')
  }
});



// Supporting information


router.post('/submit-your-edec/sections/supporting-information/return-user/check-last-year', function (req, res) {
  let answer = req.body.supportingDetails;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/supporting-information/return-user/supporting-details-complete')

  } else if (answer === 'no') {

    res.redirect('/submit-your-edec/sections/supporting-information/return-user/new-supporting-details') }

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


// which task list
router.get('/submit-your-edec/task-list/redirect', function (req, res) {

  res.redirect('/submit-your-edec/task-list/task-list-with-sections-3')

});

// which branch
router.get('/submit-your-edec/sections/practice-details/return-user/redirect', function (req, res) {

  res.redirect('/submit-your-edec/sections/practice-details/return-user/configuration-structure')

});

// General practice IT


router.post('/submit-your-edec/sections/general-practice-it/return-user/lloyd-george', function (req, res) {
  let answer = req.body.lloydGeorge;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/general-practice-it/return-user/available-book-online')

  } else {

    res.redirect('/submit-your-edec/sections/general-practice-it/return-user/offsite-storage')
  }
});



router.post('/submit-your-edec/sections/general-practice-it/new-user/lloyd-george', function (req, res) {
  let answer = req.body.lloydGeorge;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/sections/general-practice-it/new-user/available-book-online')

  } else {

    res.redirect('/submit-your-edec/sections/general-practice-it/new-user/offsite-storage')
  }
});


// Submit


router.post('/submit-your-edec/submit/confirm-reopen', function (req, res) {
  let answer = req.body.confirmReopen;

  if (answer === 'yes') {

    res.redirect('/submit-your-edec/task-list/task-list-reopened')

  } else {

    res.redirect('/submit-your-edec/a-practice/a-practice-nye-complete')
  }
});








//
// v2 change opening times
//

// Set defaults for prototype
router.post('/submit-your-edec/sections/practice-services/opening-hours/return-user/v2/', function (req, res) {

  // Set several default times for the practice
  //
  // Monday
  req.session.data.mondayTimeFrom1 = "9:00";
  req.session.data.mondayTimeFromAMPM1 = "am";
  req.session.data.mondayTimeTo1 = "12:00";
  req.session.data.mondayTimeToAMPM1 = "pm";

  req.session.data.mondayTimeFrom2 = "2:00";
  req.session.data.mondayTimeFromAMPM2 = "pm";
  req.session.data.mondayTimeTo2 = "6:00";
  req.session.data.mondayTimeToAMPM2 = "pm";

  req.session.data.mondayRow1 = "true"
  req.session.data.mondayRow2 = "true"
  req.session.data.mondayRow3 = ""

  req.session.data.mondayOpeningHours = "9:00am to 12:00pm" + "<br />" + "2:00pm to 6:00pm" + "<br />"

  // Tuesday
  req.session.data.tuesdayTimeFrom1 = "9:00";
  req.session.data.tuesdayTimeFromAMPM1 = "am";
  req.session.data.tuesdayTimeTo1 = "12:00";
  req.session.data.tuesdayTimeToAMPM1 = "pm";

  req.session.data.tuesdayTimeFrom2 = "2:00";
  req.session.data.tuesdayTimeFromAMPM2 = "pm";
  req.session.data.tuesdayTimeTo2 = "6:00";
  req.session.data.tuesdayTimeToAMPM2 = "pm";

  req.session.data.tuesdayRow1 = "true"
  req.session.data.tuesdayRow2 = "true"
  req.session.data.tuesdayRow3 = ""

  req.session.data.tuesdayOpeningHours = "9:00am to 12:00pm" + "<br />" + "2:00pm to 6:00pm" + "<br />"

  // Wednesday
  req.session.data.wednesdayTimeFrom1 = "9:00";
  req.session.data.wednesdayTimeFromAMPM1 = "am";
  req.session.data.wednesdayTimeTo1 = "12:00";
  req.session.data.wednesdayTimeToAMPM1 = "pm";

  req.session.data.wednesdayTimeFrom2 = "2:00";
  req.session.data.wednesdayTimeFromAMPM2 = "pm";
  req.session.data.wednesdayTimeTo2 = "6:00";
  req.session.data.wednesdayTimeToAMPM2 = "pm";

  req.session.data.wednesdayRow1 = "true"
  req.session.data.wednesdayRow2 = "true"
  req.session.data.wednesdayRow3 = ""

  req.session.data.wednesdayOpeningHours = "9:00am to 12:00pm" + "<br />" + "2:00pm to 6:00pm" + "<br />"

  // Thursday
  req.session.data.thursdayTimeFrom1 = "9:00";
  req.session.data.thursdayTimeFromAMPM1 = "am";
  req.session.data.thursdayTimeTo1 = "12:00";
  req.session.data.thursdayTimeToAMPM1 = "pm";

  req.session.data.thursdayTimeFrom2 = "2:00";
  req.session.data.thursdayTimeFromAMPM2 = "pm";
  req.session.data.thursdayTimeTo2 = "6:00";
  req.session.data.thursdayTimeToAMPM2 = "pm";

  req.session.data.thursdayRow1 = "true"
  req.session.data.thursdayRow2 = "true"
  req.session.data.thursdayRow3 = ""

  req.session.data.thursdayOpeningHours = "9:00am to 12:00pm" + "<br />" + "2:00pm to 6:00pm" + "<br />"

  // friday
  req.session.data.fridayTimeFrom1 = "9:00";
  req.session.data.fridayTimeFromAMPM1 = "am";
  req.session.data.fridayTimeTo1 = "12:00";
  req.session.data.fridayTimeToAMPM1 = "pm";

  req.session.data.fridayTimeFrom2 = "2:00";
  req.session.data.fridayTimeFromAMPM2 = "pm";
  req.session.data.fridayTimeTo2 = "6:00";
  req.session.data.fridayTimeToAMPM2 = "pm";

  req.session.data.fridayRow1 = "true"
  req.session.data.fridayRow2 = "true"
  req.session.data.fridayRow3 = ""

  req.session.data.fridayOpeningHours = "9:00am to 12:00pm" + "<br />" + "2:00pm to 6:00pm" + "<br />"

  // Saturday
  req.session.data.saturdayOpeningHours = "Closed";
  // Saturday
  req.session.data.sundayOpeningHours = "Closed";



  // Now redirect to check page
  res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/v2/new-opening-hours')

});

// Monday
router.post('/submit-your-edec/sections/practice-services/opening-hours/return-user/v2/change-monday', function (req, res) {
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
    req.session.data.mondayTimeFrom1 = req.body.ODS2;
    req.session.data.mondayTimeFromAMPM1 = req.body.ampm;
    req.session.data.mondayTimeTo1 = req.body.ODS;
    req.session.data.mondayTimeToAMPM1 = req.body.ampm1;

    // two
    let time3 = req.body.ODS3;
    let ampm3 = req.body.ampm3;
    let time4 = req.body.ODS4;
    let ampm4 = req.body.ampm4;
    let rowTwo = time3 + ampm3 + " to " + time4 + ampm4;
    req.session.data.mondayTimeFrom2 = req.body.ODS3;
    req.session.data.mondayTimeFromAMPM2 = req.body.ampm3;
    req.session.data.mondayTimeTo2 = req.body.ODS4;
    req.session.data.mondayTimeToAMPM2 = req.body.ampm4;

    // three
    let time5 = req.body.ODS5;
    let ampm5 = req.body.ampm5;
    let time6 = req.body.ODS6;
    let ampm6 = req.body.ampm6;
    let rowThree = time5 + ampm5 + " to " + time6 + ampm6;
    req.session.data.mondayTimeFrom3 = req.body.ODS5;
    req.session.data.mondayTimeFromAMPM3 = req.body.ampm5;
    req.session.data.mondayTimeTo3 = req.body.ODS6;
    req.session.data.mondayTimeToAMPM3 = req.body.ampm6;

    if (rowOne && req.body.ODS3 && req.body.ODS5) {
      req.session.data.mondayOpeningHours = rowOne + "<br />" + rowTwo + "<br />" + rowThree

      req.session.data.mondayRow1 = "true"
      req.session.data.mondayRow2 = "true"
      req.session.data.mondayRow3 = "true"

    } else if (rowOne && req.body.ODS3) {
      req.session.data.mondayOpeningHours = rowOne + "<br />" + rowTwo

      req.session.data.mondayRow1 = "true"
      req.session.data.mondayRow2 = "true"
      req.session.data.mondayRow3 = ""

    } else {
      req.session.data.mondayOpeningHours = rowOne

      req.session.data.mondayRow1 = "true"
      req.session.data.mondayRow2 = ""
      req.session.data.mondayRow3 = ""
    }

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/v2/new-opening-hours')

  } else {
    // set data to Closed
    // redirect to v2 check
    req.session.data.mondayOpeningHours = "Closed";
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/v2/new-opening-hours')
  }

});

// Tuesday
router.post('/submit-your-edec/sections/practice-services/opening-hours/return-user/v2/change-tuesday', function (req, res) {
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
    req.session.data.tuesdayTimeFrom1 = req.body.ODS2;
    req.session.data.tuesdayTimeFromAMPM1 = req.body.ampm;
    req.session.data.tuesdayTimeTo1 = req.body.ODS;
    req.session.data.tuesdayTimeToAMPM1 = req.body.ampm1;

    // two
    let time3 = req.body.ODS3;
    let ampm3 = req.body.ampm3;
    let time4 = req.body.ODS4;
    let ampm4 = req.body.ampm4;
    let rowTwo = time3 + ampm3 + " to " + time4 + ampm4;
    req.session.data.tuesdayTimeFrom2 = req.body.ODS3;
    req.session.data.tuesdayTimeFromAMPM2 = req.body.ampm3;
    req.session.data.tuesdayTimeTo2 = req.body.ODS4;
    req.session.data.tuesdayTimeToAMPM2 = req.body.ampm4;

    // three
    let time5 = req.body.ODS5;
    let ampm5 = req.body.ampm5;
    let time6 = req.body.ODS6;
    let ampm6 = req.body.ampm6;
    let rowThree = time5 + ampm5 + " to " + time6 + ampm6;
    req.session.data.tuesdayTimeFrom3 = req.body.ODS5;
    req.session.data.tuesdayTimeFromAMPM3 = req.body.ampm5;
    req.session.data.tuesdayTimeTo3 = req.body.ODS6;
    req.session.data.tuesdayTimeToAMPM3 = req.body.ampm6;

    if (rowOne && req.body.ODS3 && req.body.ODS5) {
      req.session.data.tuesdayOpeningHours = rowOne + "<br />" + rowTwo + "<br />" + rowThree

      req.session.data.tuesdayRow1 = "true"
      req.session.data.tuesdayRow2 = "true"
      req.session.data.tuesdayRow3 = "true"

    } else if (rowOne && req.body.ODS3) {
      req.session.data.tuesdayOpeningHours = rowOne + "<br />" + rowTwo

      req.session.data.tuesdayRow1 = "true"
      req.session.data.tuesdayRow2 = "true"
      req.session.data.tuesdayRow3 = ""

    } else {
      req.session.data.tuesdayOpeningHours = rowOne

      req.session.data.tuesdayRow1 = "true"
      req.session.data.tuesdayRow2 = ""
      req.session.data.tuesdayRow3 = ""
    }

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/v2/new-opening-hours')

  } else {
    // set data to Closed
    // redirect to v2 check
    req.session.data.tuesdayOpeningHours = "Closed";
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/v2/new-opening-hours')
  }

});

// Wednesday
router.post('/submit-your-edec/sections/practice-services/opening-hours/return-user/v2/change-wednesday', function (req, res) {
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
    req.session.data.wednesdayTimeFrom1 = req.body.ODS2;
    req.session.data.wednesdayTimeFromAMPM1 = req.body.ampm;
    req.session.data.wednesdayTimeTo1 = req.body.ODS;
    req.session.data.wednesdayTimeToAMPM1 = req.body.ampm1;

    // two
    let time3 = req.body.ODS3;
    let ampm3 = req.body.ampm3;
    let time4 = req.body.ODS4;
    let ampm4 = req.body.ampm4;
    let rowTwo = time3 + ampm3 + " to " + time4 + ampm4;
    req.session.data.wednesdayTimeFrom2 = req.body.ODS3;
    req.session.data.wednesdayTimeFromAMPM2 = req.body.ampm3;
    req.session.data.wednesdayTimeTo2 = req.body.ODS4;
    req.session.data.wednesdayTimeToAMPM2 = req.body.ampm4;

    // three
    let time5 = req.body.ODS5;
    let ampm5 = req.body.ampm5;
    let time6 = req.body.ODS6;
    let ampm6 = req.body.ampm6;
    let rowThree = time5 + ampm5 + " to " + time6 + ampm6;
    req.session.data.wednesdayTimeFrom3 = req.body.ODS5;
    req.session.data.wednesdayTimeFromAMPM3 = req.body.ampm5;
    req.session.data.wednesdayTimeTo3 = req.body.ODS6;
    req.session.data.wednesdayTimeToAMPM3 = req.body.ampm6;

    if (rowOne && req.body.ODS3 && req.body.ODS5) {
      req.session.data.wednesdayOpeningHours = rowOne + "<br />" + rowTwo + "<br />" + rowThree

      req.session.data.wednesdayRow1 = "true"
      req.session.data.wednesdayRow2 = "true"
      req.session.data.wednesdayRow3 = "true"

    } else if (rowOne && req.body.ODS3) {
      req.session.data.wednesdayOpeningHours = rowOne + "<br />" + rowTwo

      req.session.data.wednesdayRow1 = "true"
      req.session.data.wednesdayRow2 = "true"
      req.session.data.wednesdayRow3 = ""

    } else {
      req.session.data.wednesdayOpeningHours = rowOne

      req.session.data.wednesdayRow1 = "true"
      req.session.data.wednesdayRow2 = ""
      req.session.data.wednesdayRow3 = ""
    }

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/v2/new-opening-hours')

  } else {
    // set data to Closed
    // redirect to v2 check
    req.session.data.wednesdayOpeningHours = "Closed";
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/v2/new-opening-hours')
  }

});

// Thursday
router.post('/submit-your-edec/sections/practice-services/opening-hours/return-user/v2/change-thursday', function (req, res) {
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
    req.session.data.thursdayTimeFrom1 = req.body.ODS2;
    req.session.data.thursdayTimeFromAMPM1 = req.body.ampm;
    req.session.data.thursdayTimeTo1 = req.body.ODS;
    req.session.data.thursdayTimeToAMPM1 = req.body.ampm1;

    // two
    let time3 = req.body.ODS3;
    let ampm3 = req.body.ampm3;
    let time4 = req.body.ODS4;
    let ampm4 = req.body.ampm4;
    let rowTwo = time3 + ampm3 + " to " + time4 + ampm4;
    req.session.data.thursdayTimeFrom2 = req.body.ODS3;
    req.session.data.thursdayTimeFromAMPM2 = req.body.ampm3;
    req.session.data.thursdayTimeTo2 = req.body.ODS4;
    req.session.data.thursdayTimeToAMPM2 = req.body.ampm4;

    // three
    let time5 = req.body.ODS5;
    let ampm5 = req.body.ampm5;
    let time6 = req.body.ODS6;
    let ampm6 = req.body.ampm6;
    let rowThree = time5 + ampm5 + " to " + time6 + ampm6;
    req.session.data.thursdayTimeFrom3 = req.body.ODS5;
    req.session.data.thursdayTimeFromAMPM3 = req.body.ampm5;
    req.session.data.thursdayTimeTo3 = req.body.ODS6;
    req.session.data.thursdayTimeToAMPM3 = req.body.ampm6;

    if (rowOne && req.body.ODS3 && req.body.ODS5) {
      req.session.data.thursdayOpeningHours = rowOne + "<br />" + rowTwo + "<br />" + rowThree

      req.session.data.thursdayRow1 = "true"
      req.session.data.thursdayRow2 = "true"
      req.session.data.thursdayRow3 = "true"

    } else if (rowOne && req.body.ODS3) {
      req.session.data.thursdayOpeningHours = rowOne + "<br />" + rowTwo

      req.session.data.thursdayRow1 = "true"
      req.session.data.thursdayRow2 = "true"
      req.session.data.thursdayRow3 = ""

    } else {
      req.session.data.thursdayOpeningHours = rowOne

      req.session.data.thursdayRow1 = "true"
      req.session.data.thursdayRow2 = ""
      req.session.data.thursdayRow3 = ""
    }

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/v2/new-opening-hours')

  } else {
    // set data to Closed
    // redirect to v2 check
    req.session.data.thursdayOpeningHours = "Closed";
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/v2/new-opening-hours')
  }

});

// Friday
router.post('/submit-your-edec/sections/practice-services/opening-hours/return-user/v2/change-friday', function (req, res) {
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
    req.session.data.fridayTimeFrom1 = req.body.ODS2;
    req.session.data.fridayTimeFromAMPM1 = req.body.ampm;
    req.session.data.fridayTimeTo1 = req.body.ODS;
    req.session.data.fridayTimeToAMPM1 = req.body.ampm1;

    // two
    let time3 = req.body.ODS3;
    let ampm3 = req.body.ampm3;
    let time4 = req.body.ODS4;
    let ampm4 = req.body.ampm4;
    let rowTwo = time3 + ampm3 + " to " + time4 + ampm4;
    req.session.data.fridayTimeFrom2 = req.body.ODS3;
    req.session.data.fridayTimeFromAMPM2 = req.body.ampm3;
    req.session.data.fridayTimeTo2 = req.body.ODS4;
    req.session.data.fridayTimeToAMPM2 = req.body.ampm4;

    // three
    let time5 = req.body.ODS5;
    let ampm5 = req.body.ampm5;
    let time6 = req.body.ODS6;
    let ampm6 = req.body.ampm6;
    let rowThree = time5 + ampm5 + " to " + time6 + ampm6;
    req.session.data.fridayTimeFrom3 = req.body.ODS5;
    req.session.data.fridayTimeFromAMPM3 = req.body.ampm5;
    req.session.data.fridayTimeTo3 = req.body.ODS6;
    req.session.data.fridayTimeToAMPM3 = req.body.ampm6;

    if (rowOne && req.body.ODS3 && req.body.ODS5) {
      req.session.data.fridayOpeningHours = rowOne + "<br />" + rowTwo + "<br />" + rowThree

      req.session.data.fridayRow1 = "true"
      req.session.data.fridayRow2 = "true"
      req.session.data.fridayRow3 = "true"

    } else if (rowOne && req.body.ODS3) {
      req.session.data.fridayOpeningHours = rowOne + "<br />" + rowTwo

      req.session.data.fridayRow1 = "true"
      req.session.data.fridayRow2 = "true"
      req.session.data.fridayRow3 = ""

    } else {
      req.session.data.fridayOpeningHours = rowOne

      req.session.data.fridayRow1 = "true"
      req.session.data.fridayRow2 = ""
      req.session.data.fridayRow3 = ""
    }

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/v2/new-opening-hours')

  } else {
    // set data to Closed
    // redirect to v2 check
    req.session.data.fridayOpeningHours = "Closed";
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/v2/new-opening-hours')
  }

});

// Saturday
router.post('/submit-your-edec/sections/practice-services/opening-hours/return-user/v2/change-saturday', function (req, res) {
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
    req.session.data.saturdayTimeFrom1 = req.body.ODS2;
    req.session.data.saturdayTimeFromAMPM1 = req.body.ampm;
    req.session.data.saturdayTimeTo1 = req.body.ODS;
    req.session.data.saturdayTimeToAMPM1 = req.body.ampm1;

    // two
    let time3 = req.body.ODS3;
    let ampm3 = req.body.ampm3;
    let time4 = req.body.ODS4;
    let ampm4 = req.body.ampm4;
    let rowTwo = time3 + ampm3 + " to " + time4 + ampm4;
    req.session.data.saturdayTimeFrom2 = req.body.ODS3;
    req.session.data.saturdayTimeFromAMPM2 = req.body.ampm3;
    req.session.data.saturdayTimeTo2 = req.body.ODS4;
    req.session.data.saturdayTimeToAMPM2 = req.body.ampm4;

    // three
    let time5 = req.body.ODS5;
    let ampm5 = req.body.ampm5;
    let time6 = req.body.ODS6;
    let ampm6 = req.body.ampm6;
    let rowThree = time5 + ampm5 + " to " + time6 + ampm6;
    req.session.data.saturdayTimeFrom3 = req.body.ODS5;
    req.session.data.saturdayTimeFromAMPM3 = req.body.ampm5;
    req.session.data.saturdayTimeTo3 = req.body.ODS6;
    req.session.data.saturdayTimeToAMPM3 = req.body.ampm6;

    if (rowOne && req.body.ODS3 && req.body.ODS5) {
      req.session.data.saturdayOpeningHours = rowOne + "<br />" + rowTwo + "<br />" + rowThree

      req.session.data.saturdayRow1 = "true"
      req.session.data.saturdayRow2 = "true"
      req.session.data.saturdayRow3 = "true"

    } else if (rowOne && req.body.ODS3) {
      req.session.data.saturdayOpeningHours = rowOne + "<br />" + rowTwo

      req.session.data.saturdayRow1 = "true"
      req.session.data.saturdayRow2 = "true"
      req.session.data.saturdayRow3 = ""

    } else {
      req.session.data.saturdayOpeningHours = rowOne

      req.session.data.saturdayRow1 = "true"
      req.session.data.saturdayRow2 = ""
      req.session.data.saturdayRow3 = ""
    }

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/v2/new-opening-hours')

  } else {
    // set data to Closed
    // redirect to v2 check
    req.session.data.saturdayOpeningHours = "Closed";
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/v2/new-opening-hours')
  }

});

// Sunday
router.post('/submit-your-edec/sections/practice-services/opening-hours/return-user/v2/change-sunday', function (req, res) {
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
    req.session.data.sundayTimeFrom1 = req.body.ODS2;
    req.session.data.sundayTimeFromAMPM1 = req.body.ampm;
    req.session.data.sundayTimeTo1 = req.body.ODS;
    req.session.data.sundayTimeToAMPM1 = req.body.ampm1;

    // two
    let time3 = req.body.ODS3;
    let ampm3 = req.body.ampm3;
    let time4 = req.body.ODS4;
    let ampm4 = req.body.ampm4;
    let rowTwo = time3 + ampm3 + " to " + time4 + ampm4;
    req.session.data.sundayTimeFrom2 = req.body.ODS3;
    req.session.data.sundayTimeFromAMPM2 = req.body.ampm3;
    req.session.data.sundayTimeTo2 = req.body.ODS4;
    req.session.data.sundayTimeToAMPM2 = req.body.ampm4;

    // three
    let time5 = req.body.ODS5;
    let ampm5 = req.body.ampm5;
    let time6 = req.body.ODS6;
    let ampm6 = req.body.ampm6;
    let rowThree = time5 + ampm5 + " to " + time6 + ampm6;
    req.session.data.sundayTimeFrom3 = req.body.ODS5;
    req.session.data.sundayTimeFromAMPM3 = req.body.ampm5;
    req.session.data.sundayTimeTo3 = req.body.ODS6;
    req.session.data.sundayTimeToAMPM3 = req.body.ampm6;

    if (rowOne && req.body.ODS3 && req.body.ODS5) {
      req.session.data.sundayOpeningHours = rowOne + "<br />" + rowTwo + "<br />" + rowThree

      req.session.data.sundayRow1 = "true"
      req.session.data.sundayRow2 = "true"
      req.session.data.sundayRow3 = "true"

    } else if (rowOne && req.body.ODS3) {
      req.session.data.sundayOpeningHours = rowOne + "<br />" + rowTwo

      req.session.data.sundayRow1 = "true"
      req.session.data.sundayRow2 = "true"
      req.session.data.sundayRow3 = ""

    } else {
      req.session.data.sundayOpeningHours = rowOne

      req.session.data.sundayRow1 = "true"
      req.session.data.sundayRow2 = ""
      req.session.data.sundayRow3 = ""
    }

    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/v2/new-opening-hours')

  } else {
    // set data to Closed
    // redirect to v2 check
    req.session.data.sundayOpeningHours = "Closed";
    res.redirect('/submit-your-edec/sections/practice-services/opening-hours/return-user/v2/new-opening-hours')
  }

});

module.exports = router;
