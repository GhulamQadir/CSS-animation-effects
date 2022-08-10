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







let button1Clicked = false

myToggle = () => {
    let a = document.getElementById('navIcon')
    let b = document.getElementById('toggleButton')


    if (!button1Clicked) {
        button1Clicked = true

        setTimeout(() => {
            b.innerHTML = '<i id="navIcon" class="fa fa-times" aria-hidden="true"></i>'
        }, 150)
        a.className += " navMenuIcon"

        return;
    }


    if (button1Clicked) {
        button1Clicked = false

        setTimeout(() => {
            b.innerHTML = '<i id="navIcon"class="fa fa-bars" aria-hidden="true"></i>'
        }, 150)
        a.className += " navCloseIcon"

        return;
    }


 
}


