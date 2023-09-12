let dropDown = document.querySelector(".about .drop_down"),
    drop = document.querySelector(".about nav ul.list .drop");

drop.addEventListener("click", () => {
    dropDown.classList.toggle("active");
})

/////////////////////////////////////////////////

let navBar = document.querySelector(".about nav");

function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        navBar.classList.add("stick");
    } else {
        navBar.classList.remove("stick");
    }
}

window.onscroll = function () { scrollFunction() };

////////////////////////////////////////////////////

let menuBurger = document.querySelector(".menu_burger"),
    list = document.querySelector(".about nav ul.list");

menuBurger.addEventListener("click", () => {
    list.classList.toggle("active");
})

//////////////////////////////////////////////////

let imagesSlider = document.querySelector(".reviews .slider .images"),
    leftArrow = document.querySelector(".reviews .slider .left"),
    img = document.querySelector(".reviews .slider .images img"),
    rightArrow = document.querySelector(".reviews .slider .right"),
    images = ["imgs/f1.jpg.webp", "imgs/g2.jpg.webp", "imgs/g3.jpg.webp"],
    counter = 0;



rightArrow.addEventListener("click", () => {
    counter++;
    if (counter === images.length) {
        counter = 0
    }
    img.setAttribute("src", images[counter])

})

leftArrow.addEventListener("click", () => {
    counter--;
    if (counter === -1) {
        counter = images.length - 1;
    }
    img.setAttribute("src", images[counter])
})

