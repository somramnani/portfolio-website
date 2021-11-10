//__________________________________________________________
//GLOBAL VARIABlES
//__________________________________________________________
var header = $(".topnavbar");
var aboutme = $(".about");
var startButton = $("#getstartedbutton");
var projectsSection = $(".galleryimage");
//__________________________________________________________

//__________________________________________________________
//ANIMATION FUNCTIONS
//__________________________________________________________
$(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    function displayAboutMe() {
      if (scroll >= 569.5999755859375) {
        $(".about").removeClass("displaynone");
        header.addClass("fixed-top fadeInDown");
        header.removeClass("bg-transparent");
        aboutme.addClass("aboutmeanimation slideInLeft");
        $(".arrowbutton").removeClass("displaynone");
        $(".aboutmesection").removeClass("hero-section");
      } else {
        header.removeClass("fixed-top  fadeInDown ");
        header.addClass("bg-transparent");
      }
    }

    function displayProjects() {
      if (scroll >= 2166.39990234375) {
        $(".portfoliocontainer").removeClass("displaynone");
        $(".hero-section").removeClass("projectcontainer");
        projectsSection.addClass("aboutmeanimation zoomIn");
      }
    }
    displayProjects();
    displayAboutMe();
  });
});
//__________________________________________________________
