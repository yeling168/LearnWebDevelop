// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

// $(document).ready(function () {
//     $('#books').cycle();
// });


$(document).ready(function () {
    $('#books').cycle({
        timeout: 2000,
        speed: 200,
        pause: true
    });
});