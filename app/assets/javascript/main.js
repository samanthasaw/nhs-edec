// ES6 or Vanilla JavaScript

function gpSelect(gp, url){

  // grab the variable called gp
  // set gp to session storage called "surgery"
  // save that by calling to a post route
  // grab the variable called url
  // check if it is set
  // if it is, redirect the page to it
  // if not, redirect window to /submit-your-edec/task-list/redirect

  var ods;
  if (gp === "The Beveridge Practice") {
    ods = "(Y00032)"
  } else if (gp === "The Willink Practice") {
    ods = "(Y00064)"
  } else {
    ods = "(Y00001)"
  }

  $.post( "/submit-your-edec/task-list/redirect", { practice: gp, gpODSCode: ods } );
  if (url) {
    window.location.href = url
  } else {
    window.location.href = "/submit-your-edec/task-list/redirect"
  }

}


function listSelect (list, url){

  // grab the variable called list
  // set gp to session storage called "branchOne"
  // save that by calling to a post route
  // grab the variable called url
  // check if it is set
  // if it is redirect the page to it
  // if not, redirect window to /submit-your-edec/sections/practice-details/return-user/redirect

  $.post( "/submit-your-edec/sections/practice-details/return-user/redirect", { branchOne: list } );
  if (url) {
    window.location.href = url
  } else {
    window.location.href = "/submit-your-edec/sections/practice-details/return-user/redirect"
  }

}
