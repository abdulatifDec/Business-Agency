window.addEventListener("scroll", function() {
    var navScroll = document.getElementById('nav');
    navScroll.classList.toggle("scrolled", window.scrollY > 5);
});

var menu = document.getElementById("bar");
var items = document.getElementById("navbar");

items.style.right = "-360px";

menu.onclick = function() {
    if (items.style.right == "-360px") {
        items.style.right = "0";
    }
    else {
        items.style.right = "-360px";
    }
}