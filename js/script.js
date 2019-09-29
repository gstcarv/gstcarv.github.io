jQuery(document).ready(function(){

    var scrollToSkillsAppear = $(window).width() >= 720 ? 750 : 1200

    // Scroll Animations
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();

        if(scrollTop >= scrollToSkillsAppear){
            $('.skill-bar-progress').each(function(i){
                var el = $(this)
                setTimeout(function()   {
                    el.css({
                        width: el.attr('data-progress')
                    })
                }, i * 200)
            })
        } else if (scrollTop >= 300){
            // Appear About Image
            $('.about-image-overlay').css({
                width: 0
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

    // Loading Skills
    $.get('./assets/skills.json', function(skills){
        skills.forEach(function(skill){
            var skill = 
            "<div class='skill-container'>" +
                "<span class='skill-title'>" + skill.name +"</span>" +
                "<div class='skill-bar'>" +
                    "<div class='skill-bar-progress' data-progress='" + skill.progress + "%'></div>" +
                "</div>" +
            "</div>";

            $('.skills-container').append(skill)
            
        })
    })
})