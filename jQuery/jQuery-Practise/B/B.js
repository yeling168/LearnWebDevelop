// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
module('Selecting',{
  setup:function(){
    $(document).ready(function(){
    $('#selected-plays>li').addClass('horizontal');
    })
    this.topLis=$('#selected-plays>li.horizontal');
  }
});
// test('Child Selector',function(){
//   expect(1);
//   equal(this.topLis.length,3,'Top LIS have horizontal class');
// });
// test('Attribute Selectors',function(){
//   expect(2);
//   $('a[href^="mailto"]').addClass('mailto');
//   $('a[href$=".pdf"]').addClass('pdflink');
//   ok(this.topLis.find('.mailto').length==1,'a.amailto');
//   equal(this.topLis.find('.pdflink').length,1,'a.pdflink')
// });
module('Ajax');
asyncTest('JSON',function(){
  expect(2);
  var backbite={
    "term": "BACKBITE",
    "part": "v.t.",
    "definition": "To speak of a man as you find him when he can't find you."
  },
  $.getJSON('b.json',function(json,textStatus){
    equal(textStatus,'success','Request successful');
    deepEqual(json[1],backbite,'result array matches "backbite" map');
  }).always(function(){
    start();
  });
})
