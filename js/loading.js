$(document).ready(function () {

  function showLoadingTitle() {
    anime({
      targets: ".loading-title-container .title-char",
      translateY: [-100, 0],
      translateZ: 0,
      opacity: [0, 1],
      duration: 2000,
      easing: "easeInOutExpo",
      delay: (el, i) => 80 * i
    });
  }

  function hideLoadingTitle() {
    anime({
      targets: ".loading-title-container .title-char",
      translateY: [0, -100],
      translateZ: 0,
      opacity: [1, 0],
      easing: "easeInOutExpo",
      delay: (el, i) => 300 + 30 * i
    });
  }

  function showLoadingSubtitle() {
    anime({
      targets: ".loading-subtitle-container .loading-subtitle",
      translateY: [120, 0],
      translateZ: 0,
      opacity: [0, 1],
      duration: 1500,
      delay: 1500,
      easing: "easeOutExpo",
    });
  }

  function hideLoadingSubtitle() {
    anime({
      targets: ".loading-subtitle-container .loading-subtitle",
      translateY: [0, 80],
      translateZ: 0,
      opacity: [1, 0],
      duration: 2000,
      easing: "easeInOutExpo",
    });
  }

  function hideLoadingModal(){
    anime({
      targets: '.loading-container',
      height: 0,
      delay: 1200,
      duration: 1500,
      easing: 'easeInOutExpo'
    })
  }

  showLoadingTitle();
  showLoadingSubtitle();

  var loadingProgress = 0,
  loadingInterval = setInterval(() => {
    loadingProgress += 1
    var loadingPercent = loadingProgress + "%"
    $('.loading-indicator').text(loadingPercent)
    $('.loading-bar').css('width', loadingPercent)
    if (loadingProgress == 100) {
      hideLoadingTitle();
      hideLoadingSubtitle();
      hideLoadingModal();
      appearHomeImage()
      appearPresentation();
      setTimeout(function(){
        $('body').css('overflow-y', 'initial')
      }, 1000)
      clearInterval(loadingInterval)
    }
  }, 30)

})