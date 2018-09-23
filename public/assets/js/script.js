$('body').on('click', '.devour', function () {
    event.preventDefault();
  
    // get burger id
    let id = $(this).data('id');
  
    $.ajax(`api/burgers/${id}`, {
      type: 'PUT',
      data: {
        id: id
      }
    }).then(() => location.reload());
  
  });