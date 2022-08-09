openNavDiv = () => {
    let a = document.getElementById('open_nav_div')
    a.className = " showDiv"
}


closeNavDiv = () => {
    let b = document.getElementById('open_nav_div')
    b.className += " hideDiv"

    setTimeout(() => {
        b.className = " none"
    }, 550)
}

