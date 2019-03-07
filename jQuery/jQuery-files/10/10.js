$(document).ready(function () {
    var pageNum = 1;
    $('#more-photos').click(function (event) {
        event.preventDefault();
        var $link = $(this);
        console.log($link);
        var url = $link.attr('href');
        if (url) {
            $.get(url, function (data) {
                $('#gallery').append(data);
            });
            pageNum++;
            if (pageNum < 20) {
                $link.attr('href', 'pages/' + pageNum + '.html');
            } else {
                $link.remove();
            }
        }
    })
})

// $(document).ready(function () {
//     $('div.photo').hover(function () {
//         $(this).find('.details').fadeTo('fast', 0.7);
//     }, function () {
//         $(this).find('.details').fadeOut('fast');
//     })
// })

$(document).ready(function () {
    $('div.photo').on('mouseenter mouseleave', function (event) {
        console.log(event);
        var $details=$(this).find('.details');
        if(event.type=='mouseenter'){
            $details.fadeTo('fast',0.7);
        }else{
            $details.fadeOut('fast');
        }
    })
})