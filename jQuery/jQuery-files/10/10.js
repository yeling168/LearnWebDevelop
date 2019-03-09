// $(document).ready(function () {
//     var pageNum = 1;
//     $('#more-photos').click(function (event) {
//         event.preventDefault();
//         var $link = $(this);
//         console.log($link);
//         var url = $link.attr('href');
//         if (url) {
//             $.get(url, function (data) {
//                 $('#gallery').append(data);
//             });
//             pageNum++;
//             if (pageNum < 20) {
//                 $link.attr('href', 'pages/' + pageNum + '.html');
//             } else {
//                 $link.remove();
//             }
//         }
//     })
// })

// $(document).ready(function () {
//     $('div.photo').hover(function () {
//         $(this).find('.details').fadeTo('fast', 0.7);
//     }, function () {
//         $(this).find('.details').fadeOut('fast');
//     })
// })

// $(document).ready(function () {
//     $('div.photo').on('mouseenter mouseleave', function (event) {
//         console.log(event);
//         var $details = $(this).find('.details');
//         if (event.type == 'mouseenter') {
//             $details.fadeTo('fast', 0.7);
//         } else {
//             $details.fadeOut('fast');
//         }
//     })
// })

// $(document).ready(function () {
//     $('#gallery').on('mouseover mouseout', function (event) {
//         console.log(event);
//         var $target = $(event.target).closest('div.photo');
//         //console.log($target);
//         var $details = $target.find('.details');
//         var $related = $(event.relatedTarget).closest('div.photo');
//         if (event.type == 'mouseover' && $target.length) {
//             $details.fadeTo('fast', 0.7);
//         } else if (event.type == 'mouseout' && !$related.length) {
//             $details.fadeOut('fast');
//         }
//     })
// })

// $(document).ready(function () {
//     $('#gallery').on('mouseenter mouseleave', 'div.photo', function (event) {
//         var $details = $(this).find('.details');
//         if (event.type == 'mouseenter') {
//             $details.fadeTo('fast', 0.7);
//         } else {
//             $details.fadeOut('fast');
//         }
//     })
// })

// (function ($) {
//     $(document).on('nextPage', function () {
//         var url = $('#more-photos').attr('href');
//         if (url) {
//             $.get(url, function (data) {
//                 $('#gallery').append(data);
//             });
//         }
//     });

//     var pageNum = 1;
//     $(document).on('nextPage', function () {
//         pageNum++;
//         if (pageNum < 20) {
//             $('#more-photos').attr('href', 'pages/' + pageNum + '.html');
//         } else {
//             $('#more-photos').remove();
//         }
//     })
// })(jQuery);

// $(document).ready(function () {
//     $('#more-photos').click(function (event) {
//         event.preventDefault();
//         $(this).trigger('nextPage');
//     })
// })

// (function ($) {
//     function checkScrollPosition() {
//         var distance = $(window).scrollTop() + $(window).height();
//         if ($('#container').height() <= distance) {
//             $(document).trigger('nextPage');
//         }
//     }
//     $(document).ready(function () {
//         $(window).scroll(checkScrollPosition).trigger('scroll');
//     });
// })(jQuery);

(function ($) {
    function checkScrollPosition() {
        var distance = $(window).scrollTop() + $(window).height();
        if ($('#container').height() <= distance) {
            $(document).trigger('nextPage');
        }
    }
    $(document).on('nextPage', function (event, scrollToVisible) {
        var url = $('#more-photos').attr('href');
        if (url) {
            $.get(url, function (data) {
                var $data = $(data).appendTo('#gallery');
                if (scrollToVisible) {
                    var newTop = $data.offset().top;
                    $(window).scrollTop(newTop);
                }
                checkScrollPosition();
            })
        }
    })
})