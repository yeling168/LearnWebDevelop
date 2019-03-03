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
            if (pageNum < 2) {
                $link.attr('href', 'pages/' + pageNum + '.html');
            } else {
                $link.remove();
            }
        }
    })
})