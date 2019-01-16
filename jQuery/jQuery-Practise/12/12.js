// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
(function($){
   var div = document.createElement('div');
  $.support.textShadow = div.style.textShadow === '';
  $.support.filter = div.style.filter === '';
  div = null;

  // if ($.support.textShadow) {
  //   $.cssHooks.glowColor = {
  //     set: function(elem, value) {
  //       if (value == 'none') {
  //         elem.style.textShadow = '';
  //       }
  //       else {
  //         elem.style.textShadow = '0 0 2px ' + value;
  //       }
  //     }
  //   };
  // }
  // else {
  //   $.cssHooks.glowColor = {
  //     set: function(elem, value) {
  //       if (value == 'none') {
  //         elem.style.filter = '';
  //       }
  //       else {
  //         elem.style.zoom = 1;
  //         elem.style.filter =
  //           'progid:DXImageTransform.Microsoft' +
  //           '.Glow(Strength=2, Color=' + value + ');';
  //       }
  //     }
  //   };
  // }
  if($.support.textShadow){
    $.cssHooks.glowColor={
      set:function(ele,value){
        if(value=='none'){
          ele.style.textShadow='';
        }else{
          ele.style.textShadow='0 0 2px '+value;
        }
      },
      get:function(ele){
        console.log(ele.style.textShadow)
      }
    }
  }else{

  }
  $(function(){
    $table1=$('#t-1');
    $headers=$table1.find('thead th').slice(1);
    // $headers.wrapInner('<a href="#"></a>').addClass('sort');
    $headers.each(function(){
      var keyType=this.className.replace(/^sort-/,'');
      $(this).data('keyType',keyType);
    }).wrapInner('<a href="#"></a>').addClass('sort');
    var sortKeys={
      alpha:function($cell){
        var key=$cell.find('span.sort-key').text()+' ';
            key+=$.trim($cell.text()).toUpperCase();
        return key;
      },
      numeric:function($cell){
        var key=parseFloat($cell.text().replace(/^[^\d.]*/,''));
        if(isNaN(key)){
          key=0;
        }
        return key;
      },
      date:function($cell){
        var key=Date.parse('1 '+$cell.text());
        return key;
      }
    };

    // $headers.on('click',function(event){
    //   event.preventDefault();
    //   var colnum=$(this).index();

    //   var rows=$table1.find('tbody>tr').each(function(){
    //     var $cell=$(this).find('td').eq(colnum);
    //         key=$cell.find('span.sort-key').text()+' ';
    //         key+=$.trim($cell.text()).toUpperCase();
    //     $(this).data('sortKey',key);
    //   }).get();
    //   rows.sort(function(a,b){
    //     var keyA=$(a).data('sortKey');
    //     var keyB=$(b).data('sortKey');
    //     if(keyA>keyB){
    //       return 1;
    //     }else if(keyA<keyB){
    //       return -1;
    //     }else{
    //       return 0;
    //     }
    //   });
    //   $.each(rows,function(index,row){
    //     $table1.children('tbody').append(row);
    //   })
    // })

    $headers.on('click',function(event){
      event.preventDefault();
      var $header=$(this),
          colnum=$header.index(),
          keyType=$header.data('keyType'),
          sortDirection=1;//正向
      if(!$.isFunction(sortKeys[keyType])){
        return;
      }
      if($header.hasClass('sorted-asc')){
        sortDirection=-1;
      }
      var rows=$table1.find('tbody>tr').each(function(){
        var $cell=$(this).find('td').eq(colnum);
        $(this).data('sortKey',sortKeys[keyType]($cell));
      }).get();
      rows.sort(function(a,b){
        var keyA=$(a).data('sortKey').length;
        var keyB=$(b).data('sortKey').length;
        if(keyA>keyB) return sortDirection;
        else if(keyA<keyB) return -sortDirection;
        else return 0;
      });
      $(this).removeClass('sorted-asc sorted-desc');
      $(this).addClass(sortDirection==1?'sorted-asc':'sorted-desc');
      $.each(rows,function(index,row){
        $table1.children('tbody').append(row);
      });
    })


    $table2=$('#t-2');
    $headers=$table2.find('thead th').slice(1);
    $headers.wrapInner('<a href="#"></a>').addClass('sort');

    var rows=$table2.find('tbody>tr').get();
    //计算所有图书总价
    var money=0;
    $table2.find('tr:has(td)').each(function(index){
       money+=$(this).data('book')['price'];
    });
    $headers.last().append('总价$'+money)
    $headers.on('click',function(event){
      event.preventDefault();
      var $header=$(this);
          sortKey=$header.data('sort').key;
          sortDirection=1;
      if($header.hasClass('sorted-asc')){
        sortDirection=-1;
      }
      rows.sort(function(a,b){
        var keyA=$(a).data('book')[sortKey];
        var keyB=$(b).data('book')[sortKey];
        if(keyA>keyB) return sortDirection;
        else if(keyA<keyB) return -sortDirection;
        else return 0;
      });
      $header.removeClass('sorted-asc sorted-desc');
      $header.addClass(sortDirection==1?'sorted-asc':'sorted-desc');
      $.each(rows,function(index,row){
        $table2.find('tbody').append(row);
      })
    })

    function prepRows(rows){
      $.each(rows,function(index,row){
        var authors=[],
            authorsFormatted=[];
        rows[index].titleFormatted=row.title;
        rows[index].title=row.title.toUpperCase();
        $.each(row.authors,function(index,auth){
          authors[index]=auth.last_name+' '+auth.first_name;
          authorsFormatted[index]=auth.first_name+' '+auth.last_name;
        });
        rows[index].authorsFormatted=authorsFormatted.join(', ');
        rows[index].authors=authors.join(' ').toUpperCase();
      });
      return rows;
    }

    function buildRow(row){
      var html='<tr>';
          html+='<td>'+'<img src="images/'+row.img+'"></td>';
          html+='<td>'+row.titleFormatted+'</td>';
          html+='<td>'+row.authorsFormatted+'</td>';
          html+='<td>'+row.published+'</td>';
          html+='<td>$'+row.price+'</td>';
          html+='</tr>';
      return html;
    }

    function buildRows(rows){
      var allRows=$.map(rows,buildRow);
      return allRows.join('');
    }


    $.getJSON('books.json',function(data){
      var $table3=$('#t-3');
      var rows=prepRows(data);
      $table3.find('tbody').html(buildRows(rows));
      var $headers=$table3.find('thead th').slice(1);
      $headers.wrapInner('<a href="#"></a>').addClass('sort');

      $headers.on('click',function(event){
        event.preventDefault();
        var $header=$(this),
            sortKey=$header.data('sort').key,
            sortDirection=1;
        if($header.hasClass('sorted-asc')){
          sortDirection=-1;
        }

        $(rows).each(function(index,ele){

          if(/.*JQUERY/.test(ele[sortKey])){
            rows.splice(index,1)
            rows.unshift(ele);
          }
        })
        rowsjquery=rows.slice(0,2);
        rows=rows.slice(2);
        rows.sort(function(a,b){
          var keyA=a[sortKey];
          var keyB=b[sortKey];

          if(keyA>keyB) return sortDirection;
          else if(keyA<keyB) return -sortDirection;
          else return 0;
        });
        $headers.removeClass('sorted-asc sorted-desc');
        $headers.addClass(sortDirection==1?'sorted-asc':'sorted-desc');
        $table3.find('tbody').html(buildRows(rowsjquery.concat(rows)));
      })
    })

    $('table').each(function(index){
      var $table=$(this);
      $('<h3></h3>',{
        id:'table-title-'+index,
        'class':'table-title',
        text:'Table'+(index+1),
        data:{'index':index},
        click:function(event){
          event.preventDefault();
          $table.fadeToggle('slow');
        },
        css:{glowColor:'#00ff00'}
        // css:{'textShadow':'0 0 2px #00ff00'}
      }).insertBefore($table);
    })










  });
})(jQuery)
