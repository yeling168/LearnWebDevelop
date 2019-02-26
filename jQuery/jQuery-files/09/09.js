// $(document).ready(function () {
//   $('#topics a').click(function (event) {
//     event.preventDefault();
//     $('#topics a.selected').removeClass('selected');
//     $(this).addClass('selected');
//   })
// })

// $(document).ready(function () {
//   $('#topics a').click(function (event) {
//     event.preventDefault();
//     var topic = $(this).text();
//     $('#topics a.selected').removeClass('selected');
//     $(this).addClass('selected');
//     //console.log($(this));
//     //$(this) 当前点中的元素
//     $('#news tr').show();
//     if (topic != 'All') {
//       $('#news tr:has(td):not(:contains("' + topic + '"))')
//         .hide();
//     }
//   });
// });


// $(document).ready(function () {
//   $('#topics a').click(function (event) {
//     event.preventDefault();
//     var topic = $(this).text();
//     $('#topics a.selected').removeClass('selected');
//     $(this).addClass('selected');
//     $('#news').find('tr').show();
//     if (topic != 'All') {
//       $('#news').find('tr:has(td)').not(function () {
//         return $(this).children(':nth-child(4)').text() == topic;
//       }).hide();
//     }
//   });
// });

// $(document).ready(function () {
//   $('#news').find('tr:nth-child(even)').addClass('alt')
// })

// $(document).ready(function () {
//   $('#news tr').filter(function (index) {
//     return (index % 4) < 2;
//   }).addClass('alt');
// })

// $(document).ready(function () {
//   $('#news tbody').each(function () {
//     $(this).children().has('td').filter(function (index) {
//       return (index % 4) < 2;
//     }).addClass('alt');
//   });
// });

(function ($) {
  $.extend($.expr[':'], {
    group: function (element, index, matches, set) {
      var num = parseInt(matches[3], 10);
      if (isNaN(num)) {
        return false;
      }
      return index % (num * 2) < num;
    }
  });
})(jQuery);


$(document).ready(function () {
  function stripe() {
    $('#news').find('tr.alt').removeClass('alt');
    $('#news tbody').each(function () {
      $(this).children(':visible').has('td')
        .filter(function (index) {
          return (index % 4) < 2;
        }).addClass('alt');
    });
  }
  stripe();
  $('#topics a').click(function (event) {
    event.preventDefault();
    var topic = $(this).text();
    $('#topics a.selected').removeClass('selected');
    $(this).addClass('selected');
    $('#news').find('tr').show();
    if (topic != 'All') {
      $('#news').find('tr:has(td)').not(function () {
        return $(this).children(':nth-child(4)').text() == topic;
      }).hide();
    }
    stripe();
  });
})



$(document).ready(function () {
  function stripe() {
    //$('#news').find('tr.alt').removeClass('alt');
  }
})