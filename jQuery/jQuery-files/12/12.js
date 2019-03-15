$(document).ready(function () {
    var $table1 = $('#t-1');
    var $headers = $table1.find('thead th').slice(1);
    $headers.wrapInner('<a href="#"></a>').addClass('sort');
    $headers.on('click',function(event){
        event.preventDefault();
        var column = $(this).index();
    })
})