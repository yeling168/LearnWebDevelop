/* $(document).ready(function () {
    $('#letter-a a').click(function (event) {
        event.preventDefault();
        //异步的
        $('#dictionary').load('aLoad.html');
        alert('Loaded!');
    })
}) */

//http://book.learningjquery.com/6705/ch6/

// $(document).ready(function () {
//     $('#letter-b a').click(function (event) {
//         event.preventDefault();
//         var a=$.getJSON('b.json');
//         console.log(a);
//     });
// });

$(document).ready(function () {
    $('#letter-b a').click(function (event) {
        event.preventDefault();
        $.getJSON('b.json', function (data) {
            console.log(data);
        });
    });
});