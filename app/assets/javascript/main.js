// ES6 or Vanilla JavaScript

function gpSelect(gp, url){

  // grab the variable called gp
  // set gp to session storage called "surgery"
  // redirect window to /submit-your-edec/task-list/task-list-with-sections-2

  sessionStorage.setItem("surgery", gp);
  // console.log(sessionStorage.getItem("data"));
  $.post( "/submit-your-edec/task-list/redirect", { surgery: gp } );
  if (url) {
    window.location.href = url
  } else {
    window.location.href = "/submit-your-edec/task-list/redirect"
  }

}
