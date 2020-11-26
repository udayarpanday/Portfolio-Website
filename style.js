/*To shrnik navigation bar when scrolled*/

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.padding = "5px 5px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "18px 120px";
    document.getElementById("logo").style.fontSize = "45px";
  }
}
/*To change image size on hover of CV image*/

function bigImg(x) {
  x.style.height = "500px";
  x.style.width = "500px";
}

function normalImg(x) {
  x.style.height = "300px";
  x.style.width = "300px";
}
