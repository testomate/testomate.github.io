window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav-header-container").style.background = "#fff";
    document.getElementById("nav-header-container").style.boxShadow = "0 4px 20px -5px rgba(0, 0, 0, 0.4)";

  } else {
    document.getElementById("nav-header-container").style.background = "#fff";
    document.getElementById("nav-header-container").style.boxShadow = "0 -4px 0px -5px rgba(0, 0, 0, 0.4)";
  }
}