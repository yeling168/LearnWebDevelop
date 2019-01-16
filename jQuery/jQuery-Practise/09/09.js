// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
(function($){
  $.extend($.expr[':'],{
    group:function(element,index,matches,set){
      var num=parseInt(matches[3],10);
      if(isNaN(num)){
        return false;
      }
      console.log(element,index,set)
      return index%(num*2)<num;
    }
  });
  $.fn.column=function(){
    var $cells=$();
    this.each(function(){
      var $td=$(this).closest('td,th');
      if($td.length){
        var $colnum=$td[0].cellIndex+1;
        var $columnCells=$td.closest('table').find('td').filter(':nth-child('+$colnum+')');
        $cells=$cells.add($columnCells);
      }
    });
    return this.pushStack($cells);
  }
  $.extend($.expr[':'],{
    containsExactly:function(element,index,matches){
      var str=matches[3];//传入括号中的文本
      if($(element).text()==str){
       return $(this);
      }
    }
  })
  $.fn.grandparent=function(){
     var $grandparent=$();
     this.each(function(){
       $grandparent=$grandparent.add($(this).parent().parent());
    });
    return this.pushStack($grandparent);
  }
  $(function(){
    // $('#news').find('tr:nth-child(even)').addClass('alt');
    //两个为一组
    // var array=[];
    // i=0;
    // var length=$('#news').find('tr:has(td)').length;
    // while(i<=length){
    //   array.push(i);
    //   array.push(i+1);
    //   i=i+4;
    // }
    // $('#news').find('tr:has(td)').filter(function(index){
    //   for(var i=0;i<array.length;i++){
    //     if(array[i]==index) return this;
    //   }
    // }).addClass('alt');
    // $('#news').find('tr:has(td)').filter(function(index){
    //   if(index%4<2) return this;
    // }).addClass('alt');
    // stripe();
    function stripe(){
      var $news=$('#news');
      $news.find('tr.alt').removeClass('alt');
      $news.find('tbody').each(function(){
      // $(this).find('tr:visible').has('td').filter(function(i){
      //   return i%4<2;
      // }).addClass('alt');
      $(this).find('tr:visible').has('td').filter(function(index){
        if(index%3==1) return $(this).addClass('alt');
        if(index%3==2) return $(this).addClass('alt-2');
      });
     })
    }
    $('#topics a').click(function(event){
      event.preventDefault();
      $('#topics a.selected').removeClass('selected');
      $(this).addClass('selected');
      $('#news tr').show();
      var key=$(this).text();
      // if(key!="All"){
      // $('#news tr:has(td):not(:contains('+key+'))').hide();
      // }else{
      //   $('#news tr').show();
      // }
      if(key!=='All'){
        $('#news').find('tr:has(td)').filter(function(){
          if($(this).children(':containsExactly('+key+')').length==0){
            return this;
          }
        }).hide();
      }
      stripe();
    })

    $('#news td').click(function(){
      $('#news td.active').removeClass('active');
      $(this).column().addClass('active');
    })













  })
})(jQuery)
