// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
$(document).ready(function(){
  $('#selected-plays > li').addClass('horizontal');
  $('#selected-plays li:not(.horizontal)').addClass('sub-level');
  $('a[href^="mailto:"]').addClass('mailto');
  $('a[href$=".pdf"]').addClass('pdflink');
  $('a[href^="http"][href*="henry"]').addClass('henylink');
  $('table tr:nth-child(odd)').addClass('alt');
  $('a').filter(function(){
    if(this.hostname&&this.hostname!=location.hostname) return this;
  }).addClass('external');
  // $('td:contains(Henry)').addClass('highlight');
  // $('td:contains(Henry)').nextAll().addClass('highlight');等价于
  // $('td:contains(Henry)').nextAll().addBack().addClass('highlight');或者等价于
  // $('td:contains(Henry)').parent().children().addClass('highlight');或等价于
  // $('td:contains(Henry)').parent().find('td').addClass('highlight');
  $('td:contains(Henry)').parent().find('td:eq(1)').addClass('highlight').end().find('td:eq(2)').addClass('highlight');
})
