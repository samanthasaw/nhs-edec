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
  } else {
    return
  }
}
