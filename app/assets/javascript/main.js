// ES6 or Vanilla JavaScript

function gpSelect(gp, url){

  // grab the variable called gp
  // set gp to session storage called "surgery"
  // save that by calling to a post route
  // grab the variable called url
  // check if it is set
  // if it is redirect the page to it
  // if not, redirect window to /submit-your-edec/task-list/redirect

  sessionStorage.setItem("surgery", gp);
  // console.log(sessionStorage.getItem("data"));
  $.post( "/submit-your-edec/task-list/redirect", { surgery: gp } );
  if (url) {
    window.location.href = url
  } else {
    window.location.href = "/submit-your-edec/task-list/redirect"
  }

}
