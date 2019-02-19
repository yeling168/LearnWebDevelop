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
    $.fn.swapClass = function (class1, class2) {
        if (this.hasClass(class1)) {
            this.removeClass(class1).addClass(class2);
        } else if (this.hasClass(class2)) {
            this.removeClass(class2).addClass(class1);
        }
    };
})(jQuery);

$(document).ready(function () {
    $('table').click(function () {
        $('tr').swapClass('one', 'two');
    })
})

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