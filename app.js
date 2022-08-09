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



helo = () => {
    console.log("helo")
}
hi = () => {
    console.log("hi")
}

let buttonClicked = false

toggle = () => {

    let toggleButton = document.getElementById('hamburger__toggle')

    if (!buttonClicked) {
        buttonClicked = true
        helo()
        return;
    }

    if (buttonClicked) {
        buttonClicked = false
        hi()
        return;
    }

}




const button = document.querySelector(".hamburger__toggle");
button.addEventListener("click", () => button.classList.toggle("toggled"));



