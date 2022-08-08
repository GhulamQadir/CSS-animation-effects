openNavbar = () => {
    let z = document.getElementById('open_nav_div')
    z.classList.remove('hide_div')
    z.style.display = "block"

}

closeNavbar = () => {
    let a = document.getElementById('open_nav_div')
    a.className += ' hide_div'
}



$(document).ready(function () {
    $(".slide-toggle").click(function () {
        $(".box").animate({
            width: "toggle"
        });
    });
});