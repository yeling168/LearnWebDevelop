// $(document).ready(function(){
     // $('#switcher').trigger('click');
// })
 $('#switcher').on('click',function(event){
      console.log(event);
      if($(event.target).is('button')){
        var classbody=event.target.id.split('-')[1];
        // setBodyClass(classbody);
      }
   })
 // var e=jQuery.Event('click');
$('#switcher').trigger('click');
