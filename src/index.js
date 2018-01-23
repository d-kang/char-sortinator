$(document).ready(function() {
  $.get('/api/sort')
    .then(res => (console.log('get res>>>', res), res))
    .then(res => {

      res.forEach(([cell1, cell2]) => {
        $('tbody').append(`
          <tr>
            <td>${cell1}</td>
            <td>${cell2}</td>
          </tr>
          `)
      });
    })
    .catch(err => console.error('err>>>', err));


  const $form = $('form').submit((e) => {
    e.preventDefault();
    const { value: payload } = e.target[0];
    e.target[0].value = '';
    $.post('/api/sort', { payload })
      .then(res => (console.log('res>>>', res), res))
      .then(res => {

        $('tbody').append(`
          <tr>
            <td>${res[0]}</td>
            <td>${res[1]}</td>
          </tr>
          `)
      })
      .catch(err => console.error('err>>>', err));
  });

});
