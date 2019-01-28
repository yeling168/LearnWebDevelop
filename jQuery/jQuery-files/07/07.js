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

$(document).ready(function () {
    var h = document.getElementsByTagName('head')[0],
        link = document.createElement('link');

    link.href = 'ui-themes/le-frog/jquery-ui-1.10.0.custom.css';
    link.rel = 'stylesheet';
    h.appendChild(link);

    var $books = $('#books').cycle({
        timeout: 2000,
        speed: 200,
        pause: true,
        before: function () {
            $('#slider').slider('value', $('#books li').index(this));
        }
    });
    $books.hover(function () {
        $books.find('.title').animate({
            backgroundColor: '#eee',
            color: '#000'
        }, 1000)
    }, function () {
        $books.find('.title').animate({
            backgroundColor: '#000',
            color: '#fff'
        }, 1000);
    })
    if ($.cookie('cyclePaused')) {
        $books.cycle('pause');
    }
    var $controls = $('<div id="books-controls"></div>').insertAfter($books);
    $('<button>Pause</button>').click(function (event) {
        event.preventDefault();
        $books.cycle('pause');
        $.cookie('cyclePaused', 'y');
    }).button({
        icons: {
            primary: 'ui-icon-pause'
        }
    }).appendTo($controls);
    $('<button>Resume</button>').click(function (event) {
        event.preventDefault();
        var $paused = $('ul:paused');
        if ($paused.length) {
            $paused.cycle('resume');
            $.cookie('cyclePaused', null);
        } else {
            $(this).effect('shake', {
                distance: 10
            });
        }
    }).button({
        icons: {
            primary: 'ui-icon-play'
        }
    }).appendTo($controls);

    $('<div id="slider"></div>').slider({
        min: 0,
        max: $('#books li').length - 1,
        slide: function (event, ui) {
            $books.cycle(ui.value);
        }
    }).appendTo($controls);

    $('<button>Resume</button>').click(function (event) {
        event.preventDefault();
        var $paused = $('ul:paused');
        if ($paused.length) {
            $paused.cycle('resume');
        } else {
            $(this).effect('shake', {
                distance: 10
            });
        }
    }).appendTo($controls);
})

// $(document).ready(function(){
//     $('h1').click(function(){
//         $(this).toggleClass('highlighted','slow');
//     })
// })

// $(document).ready(function () {
//     $('h1').click(function () {
//         $(this).toggleClass('highlighted', 'slow', 'easeInExpo');
//     });
// });