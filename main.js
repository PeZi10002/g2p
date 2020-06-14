$(document).ready(function () {
  //öffnen des Menüs
  $(".menu-toggler").on("click", function () {
    $(this).toggleClass("open");
    $(".top-nav").toggleClass("open");
  });

  //Schließen des Hamburger-Menüs bzw on Click back to Original State
  $(".top-nav .nav-link").on("click", function () {
    $(".menu-toggler").removeClass("open");
    $(".top-nav").removeClass("open");
  });
  //Smooth-Scrolling zum jeweilig geklickten Element
  //alle Hashtag Elemente für folgende Funktion miteinbeziehen
  $('nav a[href*="#"]').on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 100,
      },
      2000
    );
  });

  $("#up").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      2000
    );
  });

  AOS.init({
    easing: "ease",
    duration: 1800,
    once: true, //animation passiert nur einmal
  });
});
