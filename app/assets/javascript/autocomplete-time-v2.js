function toggle(id) {
  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";


    // if x is a number, disable the fields that correspond
    // all inputs inside id to disabled?
    $('#' + id ).find('input, textarea, button, select').attr('disabled', true);


    var y = id - 1
    document.getElementById( "add" ).setAttribute( "onClick", "javascript: add(" + id + ");" );
  }
}

function add(id) {
  var x = document.getElementById(id);
  if (x.style.display === "none") {
    // if x is a number, disable the fields that correspond
    // all inputs inside id to disabled?
    $('#' + id ).find('input, textarea, button, select').attr('disabled', false);
    x.style.display = "block";
    var y = id + 1
    document.getElementById( "add" ).setAttribute( "onClick", "javascript: add(" + y + ");" );
    $( "#" + id + " input" ).focus();
  } else {
    return
  }
}

$( "input[name='gov']" ).on( "click", function() {
  if ( $( "input[name='gov']:checked" ).val() === "closed") {
    console.log( "closed" );
    $( ".app-opening-time__container" ).addClass("app-u-display--none ")
    $('.app-opening-time__container' ).find('input, textarea, button, select').attr('disabled', true);
  } else {
    console.log( "open" );
    $( ".app-opening-time__container" ).removeClass("app-u-display--none ")

    // Find inputs that are now visible and make them disabled.
    $('.app-opening-time__container' ).find('input:visible, textarea:visible, button:visible, select:visible').attr('disabled', false);
  }
});
