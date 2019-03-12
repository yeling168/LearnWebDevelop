// $(document).ready(function () {
//     $('div.member').on('mouseenter mouseleave', function (event) {
//         var size = event.type == 'mouseenter' ? 85 : 75;
//         var padding = event.type == 'mouseenter' ? 0 : 5;
//         $(this).find('img').animate({
//             width: size,
//             height: size,
//             paddingTop: padding,
//             paddingLeft: padding
//         })
//     })
// })



// $(document).ready(function () {
//     $('div.member').on('mouseenter mouseleave', function (event) {
//         var $image = $(this).find('img');
//         if (!$image.is(':animated') || event.type == 'mouseleave') {
//             var size = event.type == 'mouseenter' ? 85 : 75;
//             var padding = event.type == 'mouseenter' ? 0 : 5;
//             $(this).find('img').animate({
//                 width: size,
//                 height: size,
//                 paddingTop: padding,
//                 paddingLeft: padding
//             })
//         }

//     })
// })



// $(document).ready(function () {
//     $('#fx-toggle').show().on('click',function(){
//         $.fx.off=!$.fx.off;
//     })
//     $('div.member').on('mouseenter mouseleave', function (event) {
//         var size = event.type == 'mouseenter' ? 85 : 75;
//         var padding = event.type == 'mouseenter' ? 0 : 5;
//         $(this).find('img').stop().animate({
//             width: size,
//             height: size,
//             paddingTop: padding,
//             paddingLeft: padding
//         });
//     });
// });

$(document).ready(function () {
    function showDetails() {
        $(this).find('div').css({
            display: 'block',
            left: '-300px',
            top: 0
        }).each(function (index) {
            $(this).animate({
                left: 0,
                top: 25 * index
            })
        })
    }
    $('div.member').click(showDetails);
})