// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
(function($){
  $.event.special.throttledScroll={
    setup:function(){
      var timer=0;
      $(this).on('scroll.throttledScroll',function(event){
        if(!timer){
        timer=setTimeout(function(){
          $(this).triggerHandler('throttledScroll');
          timer=0;
        },250);
       }
      });
    },
    teardown:function(){
      $(this).off('scroll.throttledScroll');
    }
  };
  $.event.special.tripleclick={
      setup:function(){
      var time=0;
      $(this).on('click.tripleclick',function(event){
        if(!time){
        time=setTimeout(function(){
          $(this).triggerHandler('tripleclick');
          time=0;
        },250);
       }
      });
    },
    teardown:function(){
      $(this).off('scroll.throttledScroll');
    }
  };
  $(function(){
    //ajax加载新内容
    var pageClick=1;
    // $('#more-photos').click(function(){
    //   event.preventDefault();
    //   var $link=$(this);
    //   var url=$(this).attr('href');
    //   // if(pageClick<4){
    //   //    $.get(url,function(data){
    //   //    $('#gallery').append(data);
    //   //    $link.attr('href','pages/'+pageClick+'.html');
    //   //    if(pageClick==3){
    //   //     $link.hide();
    //   //    }
    //   //  });
    //   // }
    //   if(url){
    //     $.get(url,function(data){
    //       $('#gallery').append(data);
    //       $('body').animate({scrollTop:'+=480px'},1000);
    //     });
    //     pageClick++;
    //     if(pageClick<20){
    //       $link.attr('href','pages/'+pageClick+'.html');
    //     }else{
    //       $link.remove();
    //     }
    //   }
    // });
    $('#more-photos').click(function(){
      event.preventDefault();
      $(this).trigger('nextPage',true);
    })
    $(document).on('nextPage',function(event,scrollToVisible){
      //新内容，还链接，计数
      var url=$('#more-photos').attr('href');
      if(url){
        $('<div id="newtips">正在加载请稍等</div>').appendTo('#container');
        $.get(url,function(data){
          // $('#gallery').append(data);
          var $data=$(data).appendTo('#gallery');
            $('#gallery').trigger('pageLoaded');
          // $('body').animate({scrollTop:'+=480px'},1000);
          if(scrollToVisible){
            var newTop=$data.offset().top;
            $(window).scrollTop(newTop);
          }
        });
      }
    });
    $(document).on('nextPage',function(){
      pageClick++;
      if(pageClick<20){
        $('#more-photos').attr('href','pages/'+pageClick+'.html');
      }else{
        $('#more-photos').remove();
      }
    })

    //触发滚动的性能节流
    var timer=0;
    // $(window).scroll(function(){
    //   if(!timer){
    //     timer=setTimeout(function(){
    //      checkScrollPosition();
    //      timer=0;
    //      },250);
    //    }
    // }).trigger('scroll');
    // var scrolled=false;
    // $(window).scroll(function(){
    //   scrolled=true;
    // });
    // setInterval(function(){
    //   if(scrolled){
    //      checkScrollPosition();
    //      scrolled=false;
    //   }
    // },250);
    // checkScrollPosition();
    function checkScrollPosition(){
      var distance=$(window).scrollTop()+$(window).height();
      if($('#container').height()<distance){
        $(document).trigger('nextPage');
      }
    }
    $(window).on('throttledScroll',checkScrollPosition).trigger('throttledScroll');

    //回到顶部
    $('#gotop').click(function(event) {
     event.preventDefault();
     if($('body').scrollTop()==0){
      return false;
     }
     $('body').animate({scrollTop:0}, 'slow');
    });
    // $('div.photo').hover(function(){
    //   $(this).find('.details').fadeTo('slow',0.7);
    // },function(){
    //   $(this).find('.details').fadeOut('slow')
    // })
    // $('div.photo').on('mouseenter mouseleave',function(event){
    //   var $details=$(this).find('.details');
    //   if(event.type=='mouseenter'){
    //     $details.fadeTo('slow',0.7);
    //   }else{
    //     $details.fadeOut('slow');
    //   }
    // })
    // $('div.photo').on('mouseenter mouseleave',function(event){
    //   $(this).find('.details').toggleClass('entered');
    // })
    // $('#gallery').on('mouseover mouseout',function(event){
    //   var $target=$(event.target).closest('div.photo');//加上了closest排除了间隔gallery,但可能是img或者是details
    //   var $details=$target.find('.details');//咱心中真正的target是img，为了排除details底下要判断长度
    //   var $related=$(event.relatedTarget).closest('div.photo');
    //   if(event.type=='mouseover'&&$target.length){
    //     $details.fadeTo('slow',0.7);
    //   }else if(event.type=='mouseout'&&!$related.length){
    //     $details.fadeOut('slow');
    //   }
    // })
    //显示隐藏文字,添加selected，为照片绑定mousemove
    var time=0;
    $(document).on('mouseenter mouseleave','div.photo',function(event){
      var $details=$(this).find('.details');
      if(event.type=='mouseenter'){
        $details.fadeTo('slow',0.7);
      }else{
        $details.fadeOut('slow');
      }
    }).on('click','div.photo',function(event){
      $(this).addClass('selected');
    }).on('mousemove','div.photo',function(event){
       if(!time){
        time=setTimeout(function(){
          console.log(event.clientX,event.clientY);
          time=0;
        },200);
       }
    });
        // $('#gallery').delegate('div.photo','mouseenter',function(){
        //   var $details=$(this).find('.details');
        //   $details.fadeTo('slow',0.7);
        // }).delegate('div.photo','mouseleave',function(){
        //   var $details=$(this).find('.details');
        //   $details.fadeOut('slow');
        // });






    //自定义事件pageLoaded,一组新照片加载完成后触发
    $('#gallery').on('pageLoaded',function(){
      $('#newtips').remove();
    })


    //h1双击
    $('h1').on('tripleclick',func)
    function func(){
      console.log(1)
      $('#gallery').hide();
    }





  });
})(jQuery)
