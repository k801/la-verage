

$(window).scroll(function(){


$topscroll=$(window).scrollTop();

$serivcesTop=$('#serivces').offset().top;

console.log($topscroll);

console.log($serivcesTop);
if($topscroll>$serivcesTop)
{

    $('.navbar').fadeOut(500);
}else{

    $('.navbar').fadeIn(500);


}



})






$('.play').click(function(e){

$('.banner').fadeIn(400,function(){
    
    $('body').css({'overflow':'hidden'})



});

})


$('.closeBtn').click(function(e){

    
    $('.banner').fadeOut(400,function(){

        $('body').css({'overflow-y':'auto'})

    
    });
    
    })
    
    

