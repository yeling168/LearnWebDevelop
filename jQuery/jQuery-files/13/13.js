// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
(function($){
  $(function(){
    var $ajaxForm=$('#ajax-form');
    var $response=$('#response');
    var noresult='There is no search result';
    var failed='Sorry,but the request could not reach its destination.Try again later';
    var api={};
    $ajaxForm.on('submit',function(event){
      event.preventDefault();
      var title=$('#title').val(),
          category=$('#categories').find('li.active').text();
          search=category+'-'+title;
        if(search=='-'){
          return;
        }
      $response.addClass('loading').empty();
      // $response.load('http://api.jquery.com/#content',$ajaxForm.serialize());
    //   if(a!=undefined){
    //     if(a.state()==='pending'){
    //     a.abort();
    //     console.log('被终止')
    //   }
    // }
        if(!api[search]){
          api[search]=$.ajax({
            url:'my.php',
            // dataType:'jsonp',
            dataType:'json',
            data:{
              title:title,
              category:category
            }
          });
        }
        api[search].done(function(data){
          console.log(data.name);
        }).fail(function(){
          $response.html(failed);
        }).always(function(){
          $response.removeClass('loading');
        })
      //   a=$.ajax({
      //   url:'https://book.learningjquery.com/api/',
      //   // url:'my.pp',
      //   dataType:'jsonp',
      //   timeout:5000,
      //   data:{
      //     title:$('#title').val()
      //   },
      // }).done(response).fail(function(){
      //   $response.html(failed);
      // }).always(function(){
      //   $response.removeClass('loading');
      // });
    });

    var buildItem=function(item){
      var title=item.name,
          args=[],
          output='<li>';
      if(item.type=='method'||!item.type){
        if(item.signatures[0].params){
          $.each(item.signatures[0].params,function(index,ele){
              args.push(ele.name);
          });
        }
        title=(/^jQuery|deferred/).test(title)?title:'.'+title;
        title+='('+args.join(', ')+')';
      }else if(item.type=='selector'){
        title+='selector';
      }
      output+='<h3><a href="'+item.url+'">'+title+'</a></h3>';
      output+='<div>'+item.longdesc+'</div>';
      output+='</li>';

      return output;
    }

    var response=function(json,status,xhr){
      var output='';
      if(json&&json.length){
        output+='<ol>';
        $.each(json,function(index, el) {
            output+=buildItem(el);
        });
        output+='</ol>';
      }else{

        output+=noresult;
      }

      $response.html(output);
    }
    var searchTimeout;
    $('#title').on('keyup',function(event){
      clearTimeout(searchTimeout);
      searchTimeout=setTimeout(function(){
        $ajaxForm.triggerHandler('submit');
        }, 300);
    })

    $.ajaxSetup({
      accepts:{
        yaml:'application/x-yaml,text/yaml'
      },
      contents:{
        yaml:/yaml/
      },
      converters:{
        'text yaml':function(textValue){
          var result=YAML.eval(textValue);
          var errors=YAML.getErrors();
          if(errors.length){
            throw errors;
          }
;          return result;
        }
      }
    });

    $.ajaxPrefilter(function(options){
      if(/\.yml$/.test(options.url)){
        return 'yaml';
      }
    })
    $.ajax({
      url:'categories.yml'
    }).done(function(data){
      var cats='';
      $.each(data,function(index,ele){
        cats+='<li><a href="#">'+index+'</a></li>';
      });
      var $cats=$('#categories').removeClass('hide');
      $('<ul></ul>',{
        html:cats
       }).appendTo($cats);
    })

    $(document).on('click','#categories a',function(event){
      event.preventDefault();
      $(this).parent().toggleClass('active').siblings(' .active').removeClass('active');
      $('#ajax-form').triggerHandler('submit');
    })



    //自定义传输对象
    $.ajaxTransport('img',function(settings){
      var $img,img,prop;

      return {
        send:function(headers,complete){
          function callback(success){
            if(success){
              complete(200,'OK',{img:img});
            }else{
              $img.remove();
              complete(404,'Not Found');
            }
          }

          $img=$('<img>',{src:settings.url});
          img=$img[0];
          prop=typeof img.naturalWidth==='undefined'?'width':'naturalWidth';
          if(img.complete){
            callback(img[prop]);
          }else{
            $img.on('load error',function(event){
              callback(event.type=='load');
            });
          }
        },
        abort:function(){
          if($img){
            $img.remove();
          }
        }
      }
    });

    var n=$.ajax({
      url:'sunset.jpg',
      dataType:'img'
    }).done(function(img){
      $('<div></div>',{
        id:'picture',
        html:img
      }).appendTo('body');
    }).fail(function(xhr,textStatus,msg){
      $('<div></div>',{
        id:'picture',
        html:textStatus+':'+msg
      }).appendTo('body');
    });


    $('#ajax-pic').on('submit',function(event){
      event.preventDefault();
      $.ajax({
        url:'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?',
        // url:'https://api.github.com/users/jquery/repos',
        dataType:'my',
        data:{tags:$('#nameq').val()}
      }).done(function(data){
        console.log(data)
      }).fail(function(){
        console.log(1)
      });
    })

    $.ajaxTransport('my',function(settings){
      console.log(settings);
    })




  });
})(jQuery)
