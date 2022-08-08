openNavbar = () => {
    document.getElementById('open_nav_div').style.display = "block"
}

closeNavbar = () => {
    let a = document.getElementById('open_nav_div')
    a.className += ' hide_div'
}