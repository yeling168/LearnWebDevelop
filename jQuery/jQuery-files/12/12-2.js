//使用HTML5 自定义数据属性
$(document).ready(function () {
    $('#t-1').hide();
    var $table2 = $('#t-2');
    var $headers = $table2.find('thead th').slice(1);
    $headers
        .wrapInner('<a href="#"></a>')
        .addClass('sort');
    var rows = $table2.find('tbody>tr').get();
    $headers.on('click', function (event) {
        event.preventDefault();
        var $header = $(this),
            sortKey = $header.data('sort').key,
            sortDirection = 1;
        if ($header.hasClass('sorted-asc')) {
            sortDirection = -1;
        }
        rows.sort(function (a, b) {
            var keyA = $(a).data('book')[sortKey];
            var keyB = $(b).data('book')[sortKey];
            if (keyA < keyB) return -sortDirection;
            if (keyA > keyB) return sortDirection;
            return 0;
        });
        $headers.removeClass('sorted-asc sorted-desc');
        $header.addClass(sortDirection == 1 ? 'sorted-asc' : 'sorted-desc');
        $.each(rows, function (index, row) {
            $table2.children('tbody').append(row);
        });
    })
})