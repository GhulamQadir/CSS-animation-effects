
$(document).ready(function () {
    $(".slide-toggle").click(function () {
        $(".box").animate({
            width: "toggle"
        });
    });
});



// Animated Navbar 
$(document).ready(function () {
    $("#open_nav_btn").click(function () {
        $("#open_nav_div").animate({
            width: "show"
        }, 700);
    });
});


$(document).ready(function () {
    $("#close_nav_btn").click(function () {
        $("#open_nav_div").animate({
            width: "hide"
        }, 700);
    });
});