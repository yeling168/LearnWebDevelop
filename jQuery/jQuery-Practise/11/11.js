// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
(function($){
  $(function(){
    var $movable=$('<div id="movable"></div>').appendTo('body');

    $('div.member').on('mouseenter mouseleave',function(event){
      var $img=$(this).find('img');
      // if(!$img.is(':animated')||event.type=='mouseleave'){
      //   var size=event.type=='mouseenter'?100:75;
      //   var padding=event.type=='mouseenter'?0:5;
      //   $(this).find('img').animate({
      //     width:size,
      //     height:size,
      //     paddingLeft:padding,
      //     paddingTop:padding
      //   });
      // }
      var size=event.type=='mouseenter'?100:75;
      var padding=event.type=='mouseenter'?0:5;
      $img.stop().animate({
        width:size,
        height:size,
        paddingLeft:padding,
        paddingTop:padding
      });
    }).on('click','img.avatar',function(event){
      var $parent=$(this).parent();
      // $('div.member').find('div.active').animate({
      //   display:'block',
      //   left:-300,
      //   top:0
      // });
      if($parent.find('div').hasClass('active')){
        return;
      }else{
        $('div.member').find('div.active').removeClass('active').animate({left:-300});
        $movable.fadeOut();
        $parent.find('div').addClass('active').each(function(index){
        $(this).animate({
          left:0,
          top:index*25
        },{
          duration:3000,
          specialEasing:{
            top:'easeOutBounce'
          }
        })
      }).delay(2000).promise().done(showBio).done(function(){
        $(this).siblings('.location').addClass('highlight');
      });
      }
    });


    $.fx.speeds._default=250;
    $.fx.speeds.zippy=5000;
    $('#fx-toggle').show().click(function(){
      $.fx.off=!$.fx.off;
    })

    var bioBaseStyles={
      display:'none',
      height:5,
      width:25
    },
    bioEffect={
      duration:800,
      easing:'easeOutQuart',
      specilaEasing:{
        opacity:'linear'
      }
    }
    function showBio(){
      var $mumber=$(this).parent(),
          $bio=$mumber.find('p.bio'),
          startStyles=$.extend(bioBaseStyles,$mumber.offset()),
          endStyles={
            width:$bio.width(),
            top:$mumber.offset().top+5,
            left:$mumber.width()+$mumber.offset().left-5,
            opacity:'show'
          };
      $movable.html($bio.clone()).css(startStyles).animate(endStyles,bioEffect)
      .animate({height:$bio.height()}, {easing:'easeOutQuart'});
    }

    $('#stop').click(function(){
      $movable.add('div.active').stop(true,false);
      $('div.active').animate({
        height:'5px'
      })
    })













  });
})(jQuery)
