// $(document).ready(function () {
//     $('#switcher-default').on('click', function () {
//         $('body').removeClass('narrow');
//         $('body').removeClass('large');
//     });
//     $('#switcher-narrow').on('click', function () {
//         $('body').addClass('narrow');
//         $('body').removeClass('large');
//     });
//     $('#switcher-large').on('click', function () {
//         $('body').removeClass('narrow');
//         $('body').addClass('large');
//     });
// });

// $(document).ready(function () {
//     $("#switcher-default")
//         .addClass("selected")
//         .on("click", function () {
//             $("body").removeClass("narrow");
//             $("body").removeClass("large");
//             $('#switcher button').removeClass('selected');
//             $(this).addClass('selected');
//         })
//     $('#switcher-narrow').on('click', function () {
//         $('body').addClass('narrow');
//         $('body').removeClass('large');
//         $('#switcher button').removeClass('selected');
//         $(this).addClass('selected');
//     });
//     $('#switcher-large').on('click', function () {
//         $('body').removeClass('narrow');
//         $('body').addClass('large');
//         $('#switcher button').removeClass('selected');
//         $(this).addClass('selected');
//     });
// })

// $(document).ready(function () {
//     $('#switcher-default')
//         .addClass('selected')
//         .on('click', function () {
//             $('body').removeClass('narrow').removeClass('large');
//         });
//     $('#switcher-narrow').on('click', function () {
//         $('body').addClass('narrow').removeClass('large');
//     });
//     $('#switcher-large').on('click', function () {
//         $('body').removeClass('narrow').addClass('large');
//     });
//     $('#switcher button').on('click', function () {
//         $('#switcher button').removeClass('selected');
//         $(this).addClass('selected');
//     });
// });

// $(document).ready(function () {
//     $('#switcher-default')
//         .addClass('selected')
//         .on('click', function () {
//             $('body').removeClass();
//         });
//     $('#switcher-narrow').on('click', function () {
//         $('body').removeClass().addClass('narrow');
//     });
//     $('#switcher-large').on('click', function () {
//         $('body').removeClass().addClass('large');
//     });
//     $('#switcher button').on('click', function () {
//         $('#switcher button').removeClass('selected');
//         $(this).addClass('selected');
//     });
// });

// $(document).ready(function () {
//     $('#switcher-default').addClass('selected');
//     $('#switcher button').on('click', function () {
//         $('body').removeClass();
//         $('#switcher button').removeClass('selected');
//         $(this).addClass('selected');
//     });
//     $('#switcher-narrow').on('click', function () {
//         $('body').addClass('narrow');
//     });
//     $('#switcher-large').on('click', function () {
//         $('body').addClass('large');
//     });
// });

$(document).ready(function () {
    $("#switcher-default").addClass("selected");
    $("#switcher button").on("click", function () {
        var bodyClass = this.id.split("-")[1];
        $("body").removeClass().addClass(bodyClass);
        $('#switcher button').removeClass('selected');
        $(this).addClass('selected');
    })
});