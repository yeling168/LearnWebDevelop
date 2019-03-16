function buildRow(row) {
    var html = '<tr>';
    html += '<td><img src="images/' + row.img + '"></td>';
    html += '<td>' + row.titleFormatted + '</td>';
    html += '<td>' + row.authorsFormatted + '</td>';
    html += '<td>' + row.published + '</td>';
    html += '<td>$' + row.price + '</td>';
    html += '</tr>';
    return html;
}

function buildRows(rows) {
    var allRows = $.map(rows, buildRow);
    return allRows.join('');
}

function prepRows(rows) {
    $.each(rows, function (i, row) {
        var authors = [],
            authorsFormatted = [];
        rows[i].titleFormatted = row.title;
        rows[i].title = row.title.toUpperCase();
        $.each(row.authors, function (j, auth) {
            authors[j] = auth.last_name + ' ' + auth.first_name;
            authorsFormatted[j] = auth.first_name + ' ' +
                auth.last_name;
        });
        rows[i].authorsFormatted = authorsFormatted.join(', ');
        rows[i].authors = authors.join(' ').toUpperCase();
    });
    return rows;
}

$.getJSON('books.json', function (json) {
    $(document).ready(function () {
        $('table').each(function (index) {
            var $table = $(this);
            $('<h3></h3>', {
                id: 'table-title-' + index,
                'class': 'table-title',
                text: 'Table ' + (index + 1),
                data: {
                    'index': index
                },
                click: function (event) {
                    event.preventDefault();
                    $table.fadeToggle();
                },
                css: {
                    glowColor: '#00ff00',
                    cursor:'pointer'
                }
            }).insertBefore($table);
        });
        var $table3 = $('#t-3');
        var rows = prepRows(json);
        $table3.find('tbody').html(buildRows(rows));
        var $headers = $table3.find('thead th').slice(1);
        $headers
            .wrapInner('<a href="#"></a>')
            .addClass('sort');
        $headers.on('click', function (event) {
            event.preventDefault();
            var $header = $(this),
                sortKey = $header.data('sort').key,
                sortDirection = 1;
            if ($header.hasClass('sorted-asc')) {
                sortDirection = -1;
            }
            rows.sort(function (a, b) {
                var keyA = a[sortKey];
                var keyB = b[sortKey];
                if (keyA < keyB) return -sortDirection;
                if (keyA > keyB) return sortDirection;
                return 0;
            });
            $headers.removeClass('sorted-asc sorted-desc');
            $header.addClass(sortDirection == 1 ? 'sorted-asc' :
                'sorted-desc');
            $table3.children('tbody').html(buildRows(rows));
        });
    });
});