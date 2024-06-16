const buttonRipple = document.querySelector('.myButton')


buttonRipple.addEventListener("mouseover", (event) => {
    const x = event.pageX - buttonRipple.offsetLeft;
    const y = event.pageY - buttonRipple.offsetTop;


    buttonRipple.style.setProperty("--xPos", x + "px")
    buttonRipple.style.setProperty("--yPos", y + "px")
})