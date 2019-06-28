function toggle(id) {
  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
    var y = id - 1
    document.getElementById( "add" ).setAttribute( "onClick", "javascript: add(" + id + ");" );
  }
}

function add(id) {
  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "block";
    var y = id + 1
    document.getElementById( "add" ).setAttribute( "onClick", "javascript: add(" + y + ");" );
  } else {
    return
  }
}
