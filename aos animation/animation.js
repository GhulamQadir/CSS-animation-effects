function cardDetails(e) {
    let a = e.getAttribute("id")
    document.getElementById(a).style.display = "none"
}

hideDetails = (e) => {
    e.style.display = "block"
}