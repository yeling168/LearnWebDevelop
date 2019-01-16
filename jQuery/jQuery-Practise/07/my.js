(function($){
  // $(document).ready(function(){
  //   var t=setInterval(slide,3000);
  //   $('#books').hover(function(){
  //     clearInterval(t);
  //   },function(){
  //     t=setInterval(slide,3000);//这里一定要有t啊，因为没回一暂停，t指向的返回都代表的不一样
  //   })
  // })
  // function slide(){
  //     if(parseInt($('li').eq(0).css('top'))<=-630){ //这里务必要等于啊
  //       $('li').css('top',0);
  //     }
  //     $('li').each(function(i,el){
  //       $(this).animate({top:'-=210px'}, 'slow');
  //     });
  //   }

  $(function(){
    $.fn.cycle.defaults.timeout=10000;
    // $.fn.cycle.defaults.random=true;
    $('#books').cycle({
      timeout:1500,
      speed:2000,
      pause:true,
      before:function(){
        $('#slider').slider({
          value:$('#books li').index(this),
          animate:true,
        });

        if($('#books li').index(this)==2){
          $('#slider').slider({
            disabled:true
          });
          $('button').attr('disabled',true);
          $('#books').cycle('pause');
        }
      }

    });
    var $books=$('#books');
    var $controls=$('<div id="books-controls"></div>');
    $controls.insertBefore($books);
    $('<button>Pause</button>').appendTo($controls).click(function(){
      $books.cycle('pause');
      $.cookie('cyclePaused','y',{expires:7,path:'/'});
    }).button({
      icons:{secondary:'ui-icon-pause'}
    });
    $('<button>Resume</button>').appendTo($controls).click(function(){
      if($('#books:paused').length){
        $('#books:paused').cycle('resume');
        $.cookie('cyclePaused',null);
      }else{
        $('#books').effect('fold',{
          distance:100
        })
      }
    }).button({
      icons:{primary:'ui-icon-play'}
    });
    $.cookie('name','sd')
    if($.cookie('cyclePaused')){
      $books.cycle('pause');
    }



    $books.hover(function(){
      $books.find('.title').animate({backgroundColor:'#eee',color:'#000'},'slow');
    },function(){
      $books.find('.title').animate({backgroundColor:'#000',color:'#fff'}, 'slow');
    })

    $('h1').click(function(){
      $(this).toggleClass('highlighted','slow','easeOutBounce');
    })

    $('h2').click(function(){
      $(this).slideUp(1000);
    })
    $('#books').find('.title').resizable({
      handles:'n'
    });
    $('a').button({
      icons:{primary:'ui-icon-locked'}
    }).click(function(event) {
      event.preventDefault();
    });

    $('<div id="slider"></div>').appendTo($controls)
    .slider({
      min:0,
      max:$books.find('li').length-1,
      slide:function(event,ui){
        $books.cycle(ui.value);
      }
    });

 })

})(jQuery)
