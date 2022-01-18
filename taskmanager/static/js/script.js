document.addEventListener('DOMContentLoaded', function() {
    // sidenav init
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // Modal init
    let modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);

    //datepicket init
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmmm, yyyy",
      i18n: {done: "Select"}
    });

    // select init 
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
});



