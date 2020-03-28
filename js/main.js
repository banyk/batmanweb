$(document).ready(function () {
  let tabsItem = $('.tabs-item')
  tabsItem.on('click', function(event){
    event.preventDefault();
    let activeContnet = $(this).attr('href');
    console.log(activeContnet);
    $('.visible').toggleClass('visible');
    $(activeContnet).toggleClass('visible');
    $('.tabs_color').toggleClass('tabs_color');
    $(this).toggleClass('tabs_color');
    
  })
});