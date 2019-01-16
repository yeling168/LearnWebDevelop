// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
(function($){
  $(document).ready(function(){
    // $('a').each(function(i,obj){
    //   console.log(obj);
    //   console.log($('a').eq(0))
    //   $(this).css({'backgroundColor':'red'})
    // })
    $('div.chapter p').attr({
      'class':function(index,oldValue){
        if(oldValue==undefined) return 'inhabitants';
        else
        return oldValue+' inhabitants';
      }
    })



    $('a[href*="wikipedia"]').attr({'rel':'external',
                 'title':function(index,obj){
                   return 'Learn more about '+$(this).text()+'at Wikipedia';
                 },
                 'id':function(index,oldValue){
                    return 'wikilink-'+index;
                 }});
    $p=$('div.chapter p').filter(function(index){
      if(index>3) return true;
    })
    $('<a href="#top">back to top</a>').insertAfter($p);
    $('<a name="top">这里顶部</a>').prependTo('body');

    $('a[href*=#top]').click(function(){
      $('<p>You were here</p>').insertAfter(this);
    })
    var strong=false;

    $('#f-author').click(function(){
      if(strong){
        $('#f-author').html('by Edwin A. Abbott');
        strong=false;
      }else{
        $('#f-author').html('<b>by Edwin A. Abbott</b>');
        strong=true;
      }
    })
    // $('span.footnote').each(function(index,obj){
    //   $('<a href="#index'+index+'">'+(index+1)+'</a>').insertBefore(this).css({'backgroundColor':'red'});
    //   $(this).insertBefore('#footer').attr('name','index'+index);
    //   $('<span>'+(index+1)+'.</span>').prependTo(this);
    // })


     // $('span.footnote').insertBefore('#footer').wrapAll('<ol id="notes"></ol>').wrap('<li></li>')
     // $('span.footnote').insertBefore('#footer').wrapAll('<ol id="nodes"></ol>').each(function(){
     //  $(this).wrap('<li></li>');
     // })
      var $notes=$('<ol id="notes"></ol>').insertBefore('#footer');
      $('span.footnote').each(function(index,obj){
        // $('<sup>'+(index+1)+'</sup>').insertBefore(this);
        $(this).before(['<a href="#footnote-',index+1,'" id="context-',index+1,'" class="context">','<sup>',index+1,'</sup></a>'].join(''))
        .appendTo($notes).wrap('<li id="footnote-'+(index+1)+'"></li>').append(['&nbsp;(<a href="#context-',index+1,'">context</a>)'].join(''));
      })

      // $('span.footnote').before(function(index){
      //   return  $('<sup>'+(index+1)+'</sup>');
      // }).appendTo($notes).wrap('<li></li>')

        // var $parent=$('.pull-quote').parent();
        // $('.pull-quote').parent().css({'position':'relative'});
        // $('.pull-quote').clone().addClass('pulled').prependTo($parent);
         // $('.pull-quote').each(function(){
         //  $(this).parent().css({'position':'relative'}).append($(this).clone().addClass('pulled'));
         // })
        $('span.pull-quote').each(function(index){
            var $parentParagraph=$(this).parent('p');
            $parentParagraph.css({position:'relative'});
            var $cloneCopy=$(this).clone();
           $cloneCopy.addClass('pulled').find('span.drop').html('<h5>&hellip;</h5>').end().text($cloneCopy.text())
           .prependTo($parentParagraph);
        })
  })
})(jQuery)
