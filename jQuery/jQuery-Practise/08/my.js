

(function(xx){
  // $.sum=function(array){
  //   var sum=0;
  //   $.each(array,function(index,ele){
  //     ele=$.trim(ele);
  //     ele=parseFloat(ele)||0;
  //     sum+=ele
  //   })
  //   return sum;
  // }
  // $.average=function(array){
  //   if($.isArray(array)){
  //     return ($.sum(array)/array.length).toFixed(2);
  //   }else{
  //     return '';
  //   }
  // }
  // $.extend({
  //   sum:function(array){
  //     var sum=0;
  //     $.each(array,function(i,ele){
  //       var value=$.trim(ele);
  //       value=parseFloat(ele)||0;
  //       sum+=value;
  //     })
  //     return sum;
  //   },
  //   average:function(array){
  //     if($.isArray(array)){
  //       return ($.sum(array)/array.length).toFixed(2);
  //     }else{
  //       return '';
  //     }
  //   }
  // })
  xx.mathUtils={
    sum:function(array){
      var sum=0;
      $.each(array,function(i,ele){
        var value=$.trim(ele);
        value=parseFloat(ele)||0;
        sum+=value;
      });
      return sum;
    },
    average:function(array){
      if($.isArray(array)){
        return (xx.mathUtils.sum(array)/array.length).toFixed(2);
      }else{
        return '';
      }
    },
    slideFadeIn:function(obj){
      if($(obj).css('display')=='none'){
        $(obj).fadeIn('slow').animate({height:'70px'},{duration:'slow',queue:false});
      }else{
        $(obj).fadeOut('slow').animate({height:0}, {duration:'slow',queue:false});
      }
      return $(obj);
    }
  }
  xx.fn.swapClass=function(class1,class2){
    return this.each(function(i,ele){
      if($(this).hasClass(class1)) $(this).removeClass(class1).addClass(class2);
      else if($(this).hasClass(class2)) $(this).removeClass(class2).addClass(class1);
    });
  }
  // xx.fn.shadow=function(){
  //   return this.each(function(i,ele){
  //     var $originalElement=$(this);
  //     for(var i=0;i<5;i++){
  //       $originalElement.clone().css({
  //       position:'absolute',
  //       left:$originalElement.offset().left+i,
  //       top:$originalElement.offset().top+i,
  //       margin:0,
  //       opacity:0.1,
  //     }).appendTo('#head');
  //   }
  // });
  xx.fn.shadow=function(obj){
    var options=$.extend({},xx.fn.shadow.defaults,obj);
    return this.each(function(i,ele){
      var $originalElement=$(this);
      for(var i=0;i<options.copies;i++){
        var offset=options.copyOffset(i);
        $originalElement.clone().css({
        position:'absolute',
        left:$originalElement.offset().left+offset.x,
        top:$originalElement.offset().top+offset.y,
        margin:0,
        opacity:options.opacity
      }).appendTo('#head');
      }
    })
  }
  xx.fn.shadow.defaults={
      copies:5,
      opacity:0.1,
      copyOffset:function(index){
        return {x:index,y:index};
      }
    };


  $(function(){
    // var array=$('tr td:nth-child(2)').map(function(i,ele){
    //   if($(ele).text().length>0) return parseFloat($(ele).text());
    // })
    // $('#sum td:nth-child(2)').text($.sum(array))
    var $inventory=$('#inventory tbody');
    var quantities=$inventory.find('td:nth-child(2)').map(function(i,ele){
      return $(ele).text();
    }).get();
    var sum=xx.mathUtils.sum(quantities);
    $('#sum').find('td:nth-child(2)').text(sum);
   var price=$inventory.find('td:nth-child(3)').map(function(i,ele){
      return $(ele).text();
   }).get();
   var average=xx.mathUtils.average(price);
   $('#average').find('td:nth-child(3)').text(average);

   // $('table').click(function(){
   //  $('tr').each(function(i,ele){
   //    $(this).swapClass('one','two');
   //  })
   // })
    $('table').click(function(){
      $('tr').swapClass('one','two');
    })

    $.fn.shadow.defaults.copies=10;
    $('h1').shadow({
      copyOffset:function(index){
        return {x:-index,y:-2*index};
      }
    });

    // options={
    //   content:function(){
    //     var $obj=$(this);
    //     $.ajax($obj.attr('href'),function(data){
    //       return data;
    //     })
    //   }
    // }
    $.widget('mywidget.tooltip',{
      _create:function(){
        this._tooltipDiv=a=$('<div></div>').appendTo('body').hide().addClass('mywidget-tooltip-text'+' ui-widget ui-state-highlight ui-corner-all');
        this.element.on('mouseenter',$.proxy(this._open,this))
        .on('mouseleave',$.proxy(this._close,this)).addClass('mywidget-tooltip-trigger');
      },
      _open:function(){
        if(!this.options.disabled){
        var elementOffset=this.element.offset();
        this._tooltipDiv.css({
          position:'absolute',
          top:elementOffset.top+this.element.height(),
          left:elementOffset.left
        }).text(this.element.data('tooltip-text'));//this.options.content.call(this.element[0])
        // this._tooltipDiv.show();
        this._tooltipDiv.show({effect:this.options.effect,delay:250});
        this.element.on('tooltipopen',this.isopen);
        this._trigger('open');
      }
    },
      _close:function(){
        this._tooltipDiv.hide({effect:null,delay:250});
        this.element.on('tooltipclose',this.isopen)
        this._trigger('close');
      },
      destroy:function(){
        this._tooltipDiv.remove();
        this.element.removeClass('mywidget-tooltip-trigger').off('.mywidget.tooltip');
        $.Widget.prototype.destroy.apply(this,arguments);
      },
      open:function(){
        this._open();
      },
      close:function(){
        this._close();
      },
      isopen:function(){
        if(a.css('display')=='block'){
        console.log(true)
      }
        else{
          console.log(false);
        }
      }
    })

    $('a').tooltip({effect:'explode'});
    $('body').click(function(){
      $.mathUtils.slideFadeIn($('span'));
    })


  });
})(jQuery)
