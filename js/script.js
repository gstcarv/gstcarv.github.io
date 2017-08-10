jQuery(document).ready(function($) {

	// Parallax Background

	$('#home-content').parallax({
		imageSrc: 'img/bg1.jpg'
	});

	$('#about-content').parallax({
		imageSrc: 'img/bg2.jpg'
	});

	$('#projects-content').parallax({
		imageSrc: 'img/bg3.jpg'
	});

	$('#contact-content').parallax({
		imageSrc: 'img/bg4.jpg'
	});

	$(window).scroll(function(){

		var scrollTop = $(this).scrollTop();

		// Show Content

		if (scrollTop >= 150) {
			$('#about-content > p').addClass('animated fadeInUp');
		}

		if (scrollTop >= 700) {
			$('#projects-content > p').addClass('animated bounceIn');
		}

		if (scrollTop >= 1330) {
			$("form[name = 'sendMessage'] input, textarea").addClass('animated fadeInUp');
		}

		if (scrollTop >= 750) {
			$("#projects-content div").addClass('animated fadeInDown');
		}
	});

	// Smooth Scrolling

	 $("nav a, body > a").click(function(e){
	    e.preventDefault();
	    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
	 });

	// Return to Top ANIMATION

	$(window).scroll(function(){
		var scrollTop = $(this).scrollTop();
		if (scrollTop < 283) {
			$('i').css('opacity', '0');
		} else {
			$('i').css('opacity', '1');
		}
	});

	$("i").click(function(){
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		$(this).addClass('animated bounce').one(animationEnd, function(){
			$('i').removeClass('animated bounce');
		});
	});

	// Contact || Send E-Mail || E-Mail.Js

	(function(){
      emailjs.init("user_t4L58mZ1N5fOKxKIE5qzN");
   	})();

   	$("form[name = 'sendMessage']").submit(function(){

   			var name = $("form[name = 'sendMessage'] input[name = 'name']").val();
			var email = $("form[name = 'sendMessage'] input[name = 'email']").val();
			var subject = $("form[name = 'sendMessage'] input[name = 'subject']").val();
			var message = $("form[name = 'sendMessage'] textarea").val();

   		emailjs.send("gmail","template_15SzVcN0", {Name: name,  Email: email, MessageSubject: subject, Message: message});
	   		swal({
				title: 'Thanks Bro!',
				text: 'Your message has been sent successfully! I will reply as soon as possible',
				type: 'success'
			}, function(){
				$("form input:not(input[type = 'submit']), form textarea").val("");
			});
	
		event.preventDefault();
   	});
});
