accessibleAutocomplete.enhanceSelectElement({
  showNoOptionsFound: true,
  defaultValue: '',
  showAllValues: false,
  showNoOptionsFound: false,
  displayMenu: 'overlay',
  selectElement: document.querySelector('#ODS')
})

accessibleAutocomplete.enhanceSelectElement({
  showNoOptionsFound: true,
  defaultValue: '',
  showAllValues: false,
  showNoOptionsFound: false,
  displayMenu: 'overlay',
  selectElement: document.querySelector('#ODS2')
})

accessibleAutocomplete.enhanceSelectElement({
  showNoOptionsFound: true,
  defaultValue: '',
  showAllValues: false,
  showNoOptionsFound: false,
  displayMenu: 'overlay',
  selectElement: document.querySelector('#ODS3')
})

accessibleAutocomplete.enhanceSelectElement({
  showNoOptionsFound: true,
  defaultValue: '',
  showAllValues: false,
  showNoOptionsFound: false,
  displayMenu: 'overlay',
  selectElement: document.querySelector('#ODS4')
})

accessibleAutocomplete.enhanceSelectElement({
  showNoOptionsFound: true,
  defaultValue: '',
  showAllValues: false,
  showNoOptionsFound: false,
  displayMenu: 'overlay',
  selectElement: document.querySelector('#ODS5')
})

accessibleAutocomplete.enhanceSelectElement({
  showNoOptionsFound: true,
  defaultValue: '',
  showAllValues: false,
  showNoOptionsFound: false,
  displayMenu: 'overlay',
  selectElement: document.querySelector('#ODS6')
})


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
    $( "#" + id + " input" ).focus();
  } else {
    return
  }
}

$( "input[name='gov']" ).on( "click", function() {
  if ( $( "input[name='gov']:checked" ).val() === "closed") {
    console.log( "closed" );
    $( ".app-opening-time__container" ).addClass("app-u-display--none ")
  } else {
    console.log( "open" );
    $( ".app-opening-time__container" ).removeClass("app-u-display--none ")
  }
});
