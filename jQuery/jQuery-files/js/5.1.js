// $(document).ready(function () {
//     $('div.chapter a').attr({
//         rel: 'external',
//         title: 'Learn more at Wikipedia',
//         id: function (index, oldValue) {
//             return 'wikilink-' + index;
//         }
//     });
// });


// $(document).ready(function () {
//     $('div.chapter a[href*="wikipedia"]').css('color','red').attr({
//         rel: 'external',
//         title: 'Learn more at Wikipedia',
//         id: function (index, oldValue) {
//             return 'wikilink-' + index;
//         }
//     });
// });

// $(document).ready(function () {
//     $('div.chapter a[href*="wikipedia"]').css('color', 'red').attr({
//         rel: 'external',
//         title: function () {
//             return 'Learn more about ' + $(this).text() +
//                 ' at Wikipedia.';
//         },
//         id: function (index, oldValue) {
//             return 'wikilink-' + index;
//         }
//     });
// });

// $(document).ready(function () {
//     $('<a href="#top">back to top</a>').appendTo('div.chapter p');
//     $('<a id="top"></a>');
// });

// $(document).ready(function () {
//     $('span.footnote').insertBefore('#footer');
// });

// $(document).ready(function () {
//     $('span.footnote')
//         .insertBefore('#footer')
//         .wrapAll('<ol id="notes"></ol>')
//         .wrap('<li></li>');
// });

// $(document).ready(function () {
//     var $notes = $('<ol id="notes"></ol>').insertBefore('#footer');
//     $('span.footnote').each(function (index) {
//         $(this).appendTo($notes).wrap('<li></li>');
//     });
// });

// $(document).ready(function () {
//     var $notes = $('<ol id="notes"></ol>').insertBefore('#footer');
//     $('span.footnote').each(function (index) {
//         $('<sup>' + (index + 1) + '</sup>').insertBefore(this);
//         $(this).appendTo($notes).wrap('<li></li>');
//     });
// });

// $(document).ready(function () {
//     var $notes = $('<ol id="notes"></ol>')
//         .insertBefore('#footer');
//     $('span.footnote').each(function (index) {
//         $(this)
//             .before('<sup>' + (index + 1) + '</sup>')
//             .appendTo($notes)
//             .wrap('<li></li>');
//     });
// });

// $(document).ready(function () {
//     var $notes = $('<ol id="notes"></ol>')
//         .insertBefore('#footer');
//     $('span.footnote').each(function (index) {
//         $(this)
//             .before([
//                 '<a href="#footnote-',
//                 index + 1,
//                 '" id="context-',
//                 index + 1,
//                 '" class="context">',
//                 '<sup>',
//                 index + 1,
//                 '</sup></a>'
//             ].join(''))
//             .appendTo($notes)
//             .append([
//                 '&nbsp;(<a href="#context-',
//                 index + 1,
//                 '">context</a>)'
//             ].join(''))
//             .wrap('<li id="footnote-' + (index + 1) + '"></li>');
//     });
// });

// $(document).ready(function () {
//     $('div.chapter p:eq(0)').clone().insertBefore('div.chapter');
// });

// $(document).ready(function () {
//     $('span.pull-quote').each(function (index) {
//         var $parentParagraph = $(this).parent('p');
//         $parentParagraph.css('position', 'relative');
//         var $clonedCopy = $(this).clone();
//         $clonedCopy
//             .addClass('pulled')
//             .prependTo($parentParagraph);
//     });
// });


$(document).ready(function () {
    $('span.pull-quote').each(function (index) {
        var $parentParagraph = $(this).parent('p');
        $parentParagraph.css('position', 'relative');
        var $clonedCopy = $(this).clone();
        $clonedCopy
            .addClass('pulled')
            .find('span.drop')
            .html('&hellip;')
            .end()
            .prependTo($parentParagraph);
    });
});