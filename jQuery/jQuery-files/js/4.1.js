// // $(document).ready(function () {
// //     var $firstPara = $('p').eq(1);
// //     $firstPara.hide();
// //     $('a.more').click(function (event) {
// //         event.preventDefault();
// //         $firstPara.animate({
// //             height: 'toggle'
// //         }, 'slow');
// //         var $link = $(this);
// //         if ($link.text() == 'read more') {
// //             $link.text('read less');
// //         } else {
// //             $link.text('read more');
// //         }
// //     });
// // });

// //jQuery动画基础:https://www.cnblogs.com/mibear/p/6850440.html


// // $(document).ready(function () {
// //     var $speech = $('div.speech');
// //     var defaultSize = $speech.css('fontSize');
// //     $('#switcher button').click(function () {
// //         var num = parseFloat($speech.css('fontSize'));
// //         switch (this.id) {
// //             case 'switcher-large':
// //                 num *= 1.4;
// //                 break;
// //             case 'switcher-small':
// //                 num /= 1.4;
// //                 break;
// //             default:
// //                 num = parseFloat(defaultSize);
// //         }
// //         $speech.animate({
// //             fontSize: num + 'px'
// //         }, 'slow');
// //     });
// // });


// // $(document).ready(function () {
// //     $('div.label').click(function () {
// //         var paraWidth = $('div.speech p').outerWidth();
// //         var $switcher = $(this).parent();
// //         var switcherWidth = $switcher.outerWidth();
// //         $switcher.animate({
// //             borderWidth: '5px',
// //             left: paraWidth - switcherWidth,
// //             height: '+=20px'
// //         }, 'slow');
// //     });
// // });


// $(document).ready(function () {
//     $('div.label').click(function () {
//         var paraWidth = $('div.speech p').outerWidth();
//         var $switcher = $(this).parent();
//         var switcherWidth = $switcher.outerWidth();
//         $switcher.css({
//             position: 'relative'
//         }).animate({
//             borderWidth: '5px',
//             left: paraWidth - switcherWidth,
//             height: '+=20px'
//         }, 'slow');
//     });
// });

// $(document).ready(function () {
//     $('div.label').click(function () {
//         var paraWidth = $('div.speech p').outerWidth();
//         var $switcher = $(this).parent();
//         var switcherWidth = $switcher.outerWidth();
//         $switcher
//             .css({
//                 position: 'relative'
//             })
//             .animate({
//                 left: paraWidth - switcherWidth
//             }, 'slow')
//             .animate({
//                 height: '+=20px'
//             }, 'slow')
//             .animate({
//                 borderWidth: '5px'
//             }, 'slow');
//     });
// });

// $(document).ready(function () {
//     $('div.label').click(function () {
//         var paraWidth = $('div.speech p').outerWidth();
//         var $switcher = $(this).parent();
//         var switcherWidth = $switcher.outerWidth();
//         $switcher
//             .css({
//                 position: 'relative'
//             })
//             .fadeTo('fast', 0.5)
//             .animate({
//                 left: paraWidth - switcherWidth
//             }, 'slow')
//             .fadeTo('slow', 1.0)
//             .slideUp('slow').slideDown('slow');
//     });
// });

$(document).ready(function () {
    $('div.label').click(function () {
        var paraWidth = $('div.speech p').outerWidth();
        var $switcher = $(this).parent();
        var switcherWidth = $switcher.outerWidth();
        $switcher
            .css({
                position: 'relative'
            })
            .fadeTo('fast', 0.5)
            .animate({
                left: paraWidth - switcherWidth
            }, {
                duration: 'slow',
                queue: false
            })
            .fadeTo('slow', 1.0)
            .slideUp('slow')
            .slideDown('slow');
    });
});