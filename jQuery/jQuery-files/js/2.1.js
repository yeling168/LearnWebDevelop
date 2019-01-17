$(document).ready(function () {
    $('#selected-plays > li').addClass('horizontal');
    $('#selected-plays li:not(.horizontal)').addClass('sub-level');
});

$(document).ready(function () {
    $('a[href^="mailto:"]').addClass('mailto');
    $('a[href$=".pdf"]').addClass('pdflink');
});

$(document).ready(function () {
    $('a[href^="mailto:"]').addClass('mailto');
    $('a[href$=".pdf"]').addClass('pdflink');
    $('a[href^="http"][href*="henry"]')
        .addClass('henrylink');
});

$(document).ready(function () {
    //$("td:contains(Henry)").nextAll().addClass("highlight");
    //$("td:contains(Henry)").siblings().addClass("highlight");
    //$("td:contains(Henry)").nextAll().addClass("highlight");
    //$("td:contains(Henry)").nextAll().addBack().addClass("highlight");
    //$('td:contains(Henry)').parent().children().addClass('highlight');
    $('td:contains(Henry)').parent().find('td:eq(1)').addClass('highlight').end().find('td:eq(2)')
    .addClass('highlight');
});