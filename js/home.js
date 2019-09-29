$('.home-container').particleground({
  dotColor: '#4e4e4e',
  lineColor: '#555',
  maxSpeedX: 0.1,
  maxSpeedY: 0.1,
});

var logoTextWrapper = $('.gstcarv');
logoTextWrapper.html(logoTextWrapper.text().replace(/\S/g, "<span class='logo-letter'>$&</span>"))

anime.timeline({ loop: true })
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

function appearHomeImage() {
  anime({
    targets: '.home-container .floating-image-container',
    scale: [0.6, 1],
    delay: 1350,
    duration: 1300
  });

  anime.timeline()
    .add({
      targets: '.home-container .image-overlay',
      width: [0, "100%"],
      right: 0,
      delay: 1000,
      easing: "easeInOutExpo",
      duration: 1000
    })
    .add({
      targets: '.home-container .image',
      opacity: [0, 1],
      duration: 1
    })
    .add({
      targets: '.home-container .image-overlay',
      width: ["100%", 0],
      easing: "easeInOutExpo",
      duration: 600
    });
}

function appearPresentation() {
  anime
    .timeline()
    .add({
      targets: '.presentation-overlay',
      width: [0, "100%"],
      delay: 1700,
      easing: "easeInOutExpo",
      duration: 1000
    })
    .add({
      targets: [".principal-text-name, .presentation-small-text"],
      opacity: [0, 1],
      duration: 1
    })
    .add({
      targets: '.presentation-overlay',
      width: ["100%", 0],
      easing: "easeInOutExpo",
      duration: 600,
      complete: function(){
        appearLogoText()
      }
    });
}

function appearLogoText() {
  anime.timeline()
    .add({
      targets: '.logo-letter',
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 100 + 30 * i
    })
}