// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

// (function ($) {
//     $.sum = function (array) {
//         var total = 0;
//         $.each(array, function (index, value) {
//             value = $.trim(value);
//             value = parseFloat(value) || 0;
//             total += value;
//         });
//         return total;
//     };
//     $.average = function (array) {
//         if ($.isArray(array)) {
//             return $.sum(array) / array.length;
//         }
//         return '';
//     }
// })(jQuery)


// (function ($) {
//     $.extend({
//         sum: function (array) {
//             var total = 0;
//             $.each(array, function (index, value) {
//                 value = $.trim(value);
//                 value = parseFloat(value) || 0;
//                 total += value;
//             });
//             return total;
//         },
//         average: function (array) {
//             if ($.isArray(array)) {
//                 return $.sum(array) / array.length;
//             }
//             return '';
//         }
//     });
// })(jQuery);


(function ($) {
    $.mathUtils = {
        sum: function (array) {
            var total = 0;
            $.each(array, function (index, value) {
                value = $.trim(value);
                value = parseFloat(value) || 0;
                total += value;
            });
            return total;
        },
        average: function (array) {
            if ($.isArray(array)) {
                return $.mathUtils.sum(array) / array.length;
            }
            return '';
        }
    };
    // $.fn.swapClass = function (class1, class2) {
    //     if (this.hasClass(class1)) {
    //         this.removeClass(class1).addClass(class2);
    //     } else if (this.hasClass(class2)) {
    //         this.removeClass(class2).addClass(class1);
    //     }
    // };


    // $.fn.swapClass = function (class1, class2) {
    //     this.each(function () {
    //         var $element = $(this);
    //         if ($element.hasClass(class1)) {
    //             $element.removeClass(class1).addClass(class2);
    //         } else if ($element.hasClass(class2)) {
    //             $element.removeClass(class2).addClass(class1);
    //         }
    //     })
    // }

    $.fn.swapClass = function (class1, class2) {
        return this.each(function () {
            var $element = $(this);
            if ($element.hasClass(class1)) {
                $element.removeClass(class1).addClass(class2);
            } else if ($element.hasClass(class2)) {
                $element.removeClass(class2).addClass(class1);
            }
        });
    };

    // $.fn.shadow = function () {
    //     return this.each(function () {
    //         var $originalElement = $(this);
    //         for (var i = 0; i < 5; i++) {
    //             $originalElement.clone().css({
    //                 position: 'absolute',
    //                 left: $originalElement.offset().left + i,
    //                 top: $originalElement.offset().top + i,
    //                 margin: 0,
    //                 zIndex: -1,
    //                 opacity: 0.1
    //             }).appendTo('body');
    //         }
    //     })
    // }

    // $.fn.shadow = function () {
    //     return this.each(function (options) {
    //         var $originalElement = $(this);
    //         for (var i = 0; i < options.copies; i++) {
    //             $originalElement.clone().css({
    //                 position: 'absolute',
    //                 left: $originalElement.offset().left + i,
    //                 top: $originalElement.offset().top + i,
    //                 margin: 0,
    //                 zIndex: -1,
    //                 opacity: options.opacity
    //             }).appendTo('body');
    //         }
    //     })
    // }

    // $.fn.shadow = function () {
    //     return this.each(function (opts) {
    //         var defaults = {
    //             copies: 5,
    //             opacity: 0.1
    //         };
    //         var options = $.extend(defaults, opts);
    //         var $originalElement = $(this);
    //         for (var i = 0; i < options.copies; i++) {
    //             $originalElement.clone().css({
    //                 position: 'absolute',
    //                 left: $originalElement.offset().left + i,
    //                 top: $originalElement.offset().top + i,
    //                 margin: 0,
    //                 zIndex: -1,
    //                 opacity: options.opacity
    //             }).appendTo('body');
    //         }
    //     })
    // }

    // $.fn.shadow = function (opts) {
    //     var defaults = {
    //         copies: 5,
    //         opacity: 0.1,
    //         copyOffset: function (index) {
    //             return {
    //                 x: index,
    //                 y: index
    //             };
    //         }
    //     };
    //     var options = $.extend(defaults, opts);
    //     return this.each(function () {
    //         var $originalElement = $(this);
    //         for (var i = 0; i < options.copies; i++) {
    //             var offset = options.copyOffset(i);
    //             $originalElement
    //                 .clone()
    //                 .css({
    //                     position: 'absolute',
    //                     left: $originalElement.offset().left + offset.x,
    //                     top: $originalElement.offset().top + offset.y,
    //                     margin: 0,
    //                     zIndex: -1,
    //                     opacity: options.opacity
    //                 })
    //                 .appendTo('body');
    //         }
    //     });
    // };
})(jQuery);

$(document).ready(function () {
    $('table').click(function () {
        $('tr').swapClass('one', 'two');
    })
})

// $(document).ready(function(){
//     $('h1').shadow();
// })

// $(document).ready(function () {
//     $('h1').shadow({
//         copies: 3,
//         opacity: 0.25
//     });
// })

// $(document).ready(function () {
//     $('h1').shadow({
//         copies: 3,
//     });
// })

// $(document).ready(function () {
//     $('h1').shadow({
//         copyOffset: function (index) {
//             return {
//                 x: -index,
//                 y: -2 * index
//             };
//         }
//     });
// });

// $(document).ready(function () {
//     $.fn.shadow.defaults.copies = 10;
//     $('h1').shadow({
//         copyOffset: function (index) {
//             return {
//                 x: -index,
//                 y: index
//             };
//         }
//     });
// });


$(document).ready(function () {
    var $inventory = $('#inventory tbody');
    var quantities = $inventory.find('td:nth-child(2)').map(function (index, qty) {
        return $(qty).text();
    }).get();
    //console.log(quantities);
    var sum = $.mathUtils.sum(quantities);
    $('#sum').find('td:nth-child(2)').text(sum);
})

$(document).ready(function () {
    var $inventory = $('#inventory tbody');
    var prices = $inventory.find('td:nth-child(3)')
        .map(function (index, qty) {
            return $(qty).text();
        }).get();
    var average = $.mathUtils.average(prices);
    $('#average').find('td:nth-child(3)').text(average.toFixed(2));
});