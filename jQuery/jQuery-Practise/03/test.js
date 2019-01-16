
   // $('#switcher button').hide();
   // $('#switcher').trigger('click');
  //刚开始就出发点击事件，隐藏三个按钮
  // $('document').ready(function(){
  //  $('#switcher').trigger('click');
  // })

  //鼠标悬停事件
  $('#switcher').hover(function() {
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  });


  var en=jQuery.Event('click');
  var el=jQuery.Event('click');
  var ed=jQuery.Event('click');
//键盘触发按钮点击事件
$(document).on('keyup',function(){
   var chr=String.fromCharCode(event.which);
   if(chr in triggers){
      $("#switcher-"+triggers[chr]).trigger('click');
   }
   // if(chr=="'"){
    if(event.which==39){
      if($('body').get(0).className==''||$('body').get(0).className=='default'){
          // setBodyClass('narrow');
          $('#switcher-narrow').trigger(en);
      }else if($('body').get(0).className=='narrow'){
          // setBodyClass('large');
          $('#switcher-large').trigger(el);
      }else if($('body').get(0).className=='large'){
        // setBodyClass('default');
          $('#switcher-default').trigger(ed);
      }
   }
})
var triggers={
  'D':'default',
  'N':'narrow',
  'L':'large',
}
  //预先加黑default按钮
  $('#switcher-default').addClass('selected');
  //内置的事件代理，点击某按钮颜色加粗，绑定点击switcher背景时间
  // $('#switcher').on('click','button',function(event) {
  //     var bodyClass = event.target.id.split('-')[1];
  //     $('body').removeClass().addClass(bodyClass);
  //     $('#switcher button').removeClass('selected');
  //     $(this).addClass('selected');

  //     if(bodyClass!='default'){
  //       $('#switcher').off('click',func);
  //       $('#switcher-default').on('click',function(){
  //       $('#switcher').off('click',func);
  //       $('#switcher').on('click',func);
  //    });
  //     }
  // }).on('click',func);
//点击narrow和large按钮解除背景点击事件，但给default点击时背景可用
  // $('#switcher-narrow, #switcher-large').click(function(){
  //   $('#switcher').off('click',func);
  //   $('#switcher-default').on('click',function(){
  //     $('#switcher').off('click',func);
  //     $('#switcher').on('click',func);
  //   })
  // });

   // $('#switcher button').on('click',function(){
   //    $('#switcher').off('click',func);
   //    if(this.id=='switcher-default'){
   //    $('#switcher').on('click.a',func);
   //  }
   //  });
 //让样式转换器扩展和折叠
  function func(event){
    if(!$(event.target).is('button')){
      $('#switcher button').toggle('slow');
    }
  }

  //修改页面样式，样式转换器也会更新
  var setBodyClass=function(className){
    $('body').removeClass().addClass(className);
    $('#switcher button').removeClass('selected');
    $('#switcher-'+className).addClass('selected');
    $('#switcher').off('click',func);
    if(className=='default'){
      $('#switcher').on('click',func);
    }
  }
  $('#switcher').on('click',function(event){
     console.log(event);
    if($(event.target).is('button')){
      var classbody=event.target.id.split('-')[1];
      setBodyClass(classbody);
    }
  }).on('click',func);

  var e=jQuery.Event('click');
  $('#switcher').trigger(e);




//在CD被单击时应用selected样式
$('div :contains(Charles Dickens)').click(function(){
  $(this).toggleClass('selected');
})
//双击标题切换文本可见性
$('.chapter-title').on('dblclick',function(){
  $(this).parent().children('p').toggle('slow');
})

//段落中移动位置
$('#chapter-1 p').mouseover(function(){
  console.log(event.clientX,event.clientY);
})

