// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

// $(document).ready(function () {
//     $('#books').cycle();
// });


// $(document).ready(function () {
//     $('#books').cycle({
//         timeout: 2000,
//         speed: 200,
//         pause: true
//     });
// });

// $.fn.cycle.defaults.timeout = 10000;
// $.fn.cycle.defaults.random = true;

// $(document).ready(function () {
//     $("#books").cycle({
//         timeout: 2000,
//         speed: 2000,
//         pause: true
//     });
// })

// $(document).ready(function () {
//     var $books = $('#books');
//     var $controls = $('<div id="books-controls"></div>');
//     $controls.insertAfter($books);
//     $('<button>Pause</button>').click(function (event) {
//         event.preventDefault();
//         $books.cycle('pause');
//     }).appendTo($controls);
//     $('<button>Resume</button>').click(function (event) {
//         event.preventDefault();
//         $books.cycle('resume');
//     }).appendTo($controls);
// });

// var $controls = $('<div id="books-controls"></div>')
//     .insertAfter($books);
// $('<button>Pause</button>').click(function (event) {
//     event.preventDefault();
//     $books.cycle('pause');
//     $.cookie('cyclePaused', 'y');
// }).appendTo($controls);
// $('<button>Resume</button>').click(function (event) {
//     event.preventDefault();
//     $('ul:paused').cycle('resume');
//     $.cookie('cyclePaused', null);
// }).appendTo($controls);