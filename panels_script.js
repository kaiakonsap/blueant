function openFirstPanel(){
  var hash = window.location.hash;
  var selector = $('.clickable'+hash+':first');
  if(selector){
selector.parent().children('.sub').slideDown();
selector.parent().children('.sub').addClass('active');    
  }
  else {
  $('.sub').first().slideDown();
  $('.sub').first().addClass('active');
  }

}
$( document ).ready(function() {
  var allPanels = $('.sub').hide();
  openFirstPanel();
  $('.clickable').click(function() {
   $this = $(this);
   $target =  $this.parent().children('.sub');

   if($target.hasClass('active')){
    $target.removeClass('active').slideUp(); 
  }else{
    allPanels.removeClass('active').slideUp();
    $target.addClass('active').slideDown();
  }
  return false;
});

})