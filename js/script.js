jQuery(document).ready(function(){

    // Parallax background (except in mobile)
    $('#mainContainer').parallax({
        imageSrc: 'img/home-bg.png',
        speed: 0.35
    });

    // Scroll Animations
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();  
        if(scrollTop >= 600){
            $('.skill-bar-progress').each(function(){
                $(this).css('width', $(this).attr('data-progress'));
            })
        }
    })

    // Smooth Scrolling
	 $('.smooth').click(function(e){
        e.preventDefault();
	    $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1500);
     });
})