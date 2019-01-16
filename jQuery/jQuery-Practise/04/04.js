// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
// $(document).ready(function(){

// })
window.onload=initPage;
function initPage(){
  document.getElementsByTagName('span')[0].onmouseover=function(){
   console.log(12)
  }
}
(function($){
  $(document).ready(function(){
    $('body').css('display','none');
    $('body').fadeIn('slow');
    $('p').hover(function(){
      $(this).css('backgroundColor','yellow');
    },function(){
      $(this).css('backgroundColor','');
    });
    $('h2').click(function(){
      $(this).animate({'opacity':'0.25','marginLeft':'20px'},'slow',function(){
        $('.speech').animate({'opacity':'0.1'});
      });
    });

    var $switcher=$('#switcher');
    $switcher.css({'position':'relative','left':'0','top':'0'});

    $('body').keydown(function(){
      console.log('left:'+$switcher.css('left')+'right:'+$switcher.css('right')+'top:'+$switcher.css('top')+'bottom:'+$switcher.css('bottom'));
      switch(event.which){
        case 37:$switcher.animate({'left':'-=20px'},'slow');break;
        case 38:$switcher.animate({'top':'-=20px'},'show');break;
        case 39:$switcher.animate({'left':'+=20px'},'slow');break;
        case 40:$switcher.animate({'top':'+=20px'},'slow');break;
      }
    })
  });
//   $(function(){
//     //页面加载后漫漫但如内容
//     $('body').fadeIn('slow');
//     var $speech=$('div.speech');
//     var defaultSize=parseFloat($speech.css('font-size'));//11.666
//     $('#switcher').click(function(){
//       var fontSize=parseFloat($speech.css('font-size'));//11.666
//       var newSize=null;
//       // if(event.target.id=='switcher-large'){
//       //   newSize=fontSize*1.4;//16.999
//       // }else if(event.target.id=='switcher-small'){
//       //   newSize=fontSize/1.4;
//       // }
//       switch(event.target.id){
//         case 'switcher-large':newSize=fontSize*1.4;break;
//         case 'switcher-small':newSize=fontSize/1.4;break;
//         case 'switcher-default':newSize=defaultSize;break;
//       }
//       var speed=null;
//       // var t=setInterval(function(){
//       //   speed=parseFloat($speech.css('font-size'))+fontSize*0.1+'px';
//       //   if(parseFloat($speech.css('fontSize'))>newSize){
//       //     clearInterval(t);
//       //   }
//       //   $speech.css('fontSize',speed);
//       // },50);
//       // $speech.css('fontSize',newSize+'px');
//       $speech.animate({fontSize:newSize+'px'},'slow');
//     })

//     $('p').eq(1).hide();
//     var $p=$('p').eq(1);
//     var show=false;
//     $('span').click(function(event) {
//      if(show){
//       $('p').eq(1).slideDown('slow');
//       show=false;
//      }else{
//       $('p').eq(1).slideUp('slow');
//       show=true;
//      }
//     });

//     $('.more').click(function(){
//       event.preventDefault();
//       if($p.is(':hidden')){//$(this).text()=='read more'
//         // $p.slideDown('slow');
//         $(this).text('read less');
//         // $p.animate({height:'show',opacity:'show'},'slow');

//       }else{
//         // $p.slideUp('slow');
//         $(this).text('read more');
//         // $p.animate({height:'hide',opacity:'hide'},'slow');
//       }
//       // $p.slideToggle('slow');
//       $p.animate({'height':'toggle','opacity':'toggle'},'slow')
//     });


//     $('.label').click(function(){
//       // var height=parseFloat($('#switcher').css('height'));
//       var left=$('p').outerWidth()-$('#switcher').outerWidth()+'px';
//       // $('#switcher').css({'position':'relative'}).animate({
//       //   // 'height':height+20+'px',
//       //   'height':'+=20px',
//       //   'borderWidth':'5',
//       //   // 'left':left
//       //   'left':$('p').outerWidth()-$('#switcher').outerWidth()
//       // },'slow');
//     //   $('#switcher').css({'position':'relative'}).animate({'left':left},'slow').animate({'height':'+=20px'}).animate({'borderWidth':'5px'});
//      $('#switcher').css({'position':'relative'})
//      .fadeTo(1000,0.5)
//      .animate({'left':left},{duration:'slow',queue:false})
//      .fadeTo('slow',1,function(){
//       $('#switcher').css({'backgroundColor':'red'});
//      })
//      // .slideUp('slow')
//      // .queue(function(){
//      //  $('#switcher').css('backgroundColor','red').dequeue();
//      // })
//      .slideUp('slow')
//      .slideDown('slow');
//     })

//     $('p').eq(2).css({'border':'1px solid #333'});
//     $('p').eq(3).css({'backgroundColor':'#ccc'}).hide();

//     $('p').eq(2).click(function(){
//       // $(this).slideUp('fast').next().slideDown('fast');
//       var $clickItem=$(this);
//       $clickItem.next().slideDown('fast',function(){
//         $clickItem.slideUp('fast');
//       })
//     })
// });
})(jQuery)
