// $(document).ready(function () {
//   $('#topics a').click(function (event) {
//     event.preventDefault();
//     $('#topics a.selected').removeClass('selected');
//     $(this).addClass('selected');
//   })
// })

$(document).ready(function () {
  $('#topics a').click(function (event) {
    event.preventDefault();
    var topic = $(this).text();
    $('#topics a.selected').removeClass('selected');
    $(this).addClass('selected');
    //console.log($(this));
    //$(this) 当前点中的元素
    $('#news tr').show();
    if (topic != 'All') {
      $('#news tr:has(td):not(:contains("' + topic + '"))')
        .hide();
    }
  });
});