let dropDown = document.querySelector(".about .drop_down"),
    drop = document.querySelector(".about .drop");

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

window.onscroll = function() {scrollFunction()};