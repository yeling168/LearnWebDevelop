// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
(function($){
    $(document).ready(function(){
      // $('div#loading').css('display','block');
      $('<div id="loading">loading...</div>').insertBefore('#dictionary');
      $(document).ajaxStart(function(){
        $('#loading').show();
      }).ajaxStop(function(){
        $('#loading').hide();
      })

      $('body').on('click','h3.term',function(){
        $(this).siblings().slideToggle('slow');
      })

      $.ajaxSetup({
        url:'a.html',
        type:'POST',
        dataType:'html'
      })
      // $('#letter-a a').click(function(){
      //   event.preventDefault();
      //   // $('#dictionary').hide().load('a.html',function(){
      //   //   $(this).fadeIn('slow');
      //   // });
      //   // $.ajax({
      //   //   url:'a.html',
      //   //   success:function(data){
      //   //     $('#dictionary').hide().html(data).fadeIn('slow');
      //   //   }
      //   // })
      //   $.ajax({
      //     type:'GET',
      //     success:function(data){
      //       $('#dictionary').hide().html(data).fadeIn('slow');
      //     }
      //   })
      // })

      $('#letter-a a').click(function(){
        event.preventDefault();
        $('#dictionary').load('h.html .entry');
      })
      $('#letter-b a').click(function(){
        event.preventDefault();
        $.getJSON('b.json',function(data){
          var html='';
          $.each(data,function(index, el) {
            html+='<div class="entry">';
            html+='<h3 class="term">'+el.term+'</h3>';
            html+='<div class="part">'+el.part+'</div>';
            html+='<div class="definition">'+el.definition;
            html+='</div>';
            if(el.quote){
              html+='<div class="quote">'
              $.each(el.quote,function(index,el){
              html+='<div class="quote-line">'+el+'</div>';
             })
              if(el.author){
                html+='<div class="quote-author">'+el.author+'</div>';
              }
              html+='</div>'
            }
            html+='</div>';
            html+='</div>';
            // $.each(el,function(index,ele){
            //   if(ele instanceof Array){
            //     $.each(ele,function(index){
            //       html+='<div>'+ele[index]+'</div>';
            //     })
            //   }else{
            //     html+='<div>'+ele+'</div>';
            //   }
            // })
          });
          $('#dictionary').html(html);
        });

      })


      $('#letter-c a').click(function(event) {
        event.preventDefault();
        $.getScript('c.js');
      });

      $('#letter-d a').click(function(event) {
        event.preventDefault();
        $.get('d.xml',function(data){
          $('#dictionary').empty();
          var html='';
          $(data).find('entry:has(quote[author])').each(function(){
            var $entry=$(this);
            html+='<div class="entry">';
            html+='<h3 class="term">'+$entry.attr('term')+'</h3>';
            html+='<div class="part">'+$entry.attr('part')+'</div>';
            html+='<div class="definition">'+$entry.find('definition').text();

            var $quote = $entry.find('quote');
        if ($quote.length) {
          html += '<div class="quote">';
          $quote.find('line').each(function() {
            html += '<div class="quote-line">';
              html += $(this).text() + '</div>';
          });
          if ($quote.attr('author')) {
            html += '<div class="quote-author">';
              html += $quote.attr('author') + '</div>';
          }
          html += '</div>';
        }
            html+='</div>';
            html+='</div>';
            //entry
            // $('#dictionary').html($('#dictionary').html()+html);
            // $('#dictionary').append($(html));
          })
          $('#dictionary').html(html);





        })
      });

      // $('#letter-e a').click(function(){
      //   event.preventDefault();
      //   // $('#dictionary').load('e.php?term='+$(event.target).text());
      //   var requestData={term:$(this).text()};
      //   // $.post('e.php',requestData,function(data){
      //   //   $('#dictionary').html(data);
      //   // })
      //   $('#dictionary').load('e.php',requestData);
      // })
      $('#letter-e a').click(function(){
        event.preventDefault();
        var requestData="term="+$(this).text();
        $.get('json.php',requestData,function(data){
          var html='';
          $.each(data,function(index, el) {
            html+='<div class="entry">';
            html+='<h3 class="term">'+index+'</h3>';
            html+='<div class="part">'+el.part+'</div>';
            html+='<div class="definition">'+el.definition;
            html+='</div>';
            // if(el.quote){
            //   html+='<div class="quote">'
            //   $.each(el.quote,function(index,el){
            //   html+='<div class="quote-line">'+el+'</div>';
            //  })
            //   if(el.author){
            //     html+='<div class="quote-author">'+el.author+'</div>';
            //   }
            //   html+='</div>'
            // }
            html+='</div>';
            html+='</div>';
          });
          $('#dictionary').html(html);
        }).fail(function(XHR){
          $('#dictionary').html('An error occurred'+XHR.status+'<br>'+XHR.responseText);
        })
      })

      $('#letter-f form').submit(function(){
        event.preventDefault();
        var url=$(this).attr('action');
        // var requestData={'term':$('input[name="term"]').val()};
        var requestData=$(this).serialize();
        if($(this).find('input[type="text"]').val()==''){
          return;
        }
        $.post(url,requestData,function(data){
          $('#dictionary').html(data);
        });
      })


      // $('#letter-g a').click(function(){
      //   event.preventDefault();
      //   var url='http://examples.learningjquery.com/jsonp/g.php';
      //    var html='';
      //   $.getJSON('g.php',function(data,status,xhr){

      //     $.each(data,function(index,el){
      //       html='<div class="entry">';
      //       html+='<h3 class="term">'+index+'</h3>';
      //       html+='<div class="part">'+el.part+'</div>';
      //       html+='<div class="definition">'+el.definition;
      //       if(el.quote){
      //         var $quote=el.quote;
      //         html+='<div class="quote">';
      //         $.each($quote,function(index,el){
      //           html+='<div class="quote-line">'+el+'</div>';
      //         });
      //         if(el.author){
      //           html+='<div class="quote-author">'+el.author+'</div>';
      //         }
      //         html+='</div>';
      //       }
      //       html+='</div>';
      //       html+='</div>';
      //     })
      //     $('#dictionary').html(html);
      //   });
      // })
      var url = 'http://examples.learningjquery.com/jsonp/g.php';
  // $('#letter-g a').click(function(event) {
  //   event.preventDefault();
  //   $.getJSON(url,'callback=?',function(data,status,xhr) {
  //     var html = '';
  //     console.log(status,xhr)
  //     $.each(data, function(entryIndex, entry) {
  //       html += '<div class="entry">';
  //       html += '<h3 class="term">' + entry.term + '</h3>';
  //       html += '<div class="part">' + entry.part + '</div>';
  //       html += '<div class="definition">';
  //       html += entry.definition;
  //       if (entry.quote) {
  //         html += '<div class="quote">';
  //         $.each(entry.quote, function(lineIndex, line) {
  //           html += '<div class="quote-line">' + line + '</div>';
  //         });
  //         if (entry.author) {
  //           html += '<div class="quote-author">' + entry.author + '</div>';
  //         }
  //         html += '</div>';
  //       }
  //       html += '</div>';
  //       html += '</div>';
  //     });
  //     $('#dictionary').html(html);
  //   });
  // });

    $('#letter-g a').click(function(){
      event.preventDefault();
      var xhr=new XMLHttpRequest();
      xhr.open('GET','b.json',true);
      xhr.send(null);
      xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
          console.log(JSON.parse(xhr.responseText));
        }
      }
    })

    // $('#dictionary').load('exercises-content.html');

    // $('.letters h3').hover(function() {
    //   var url='exercises-content.html #letter-'+$(this).text().toLowerCase();
    //   $('#dictionary').load(url);
    // }, function() {

    // });

    var url='https://api.github.com/users/jquery/repos';
    $.getJSON(url+'?callback=?',function(data){
      var html='';
      $.each(data.data,function(index,el){
        html+='<div>'+el.name+'&nbsp;';
        html+=el.owner.url+'</div><br>';
      })
      $('#dictionary').html(html);
    })

















    })
})(jQuery)
