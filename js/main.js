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

window.onscroll = function() {scrollFunction()};

////////////////////////////////////////////////////

let menuBurger = document.querySelector(".menu_burger"),
    list = document.querySelector(".about nav ul.list");

menuBurger.addEventListener("click", () => {
    list.classList.toggle("active");
})

function fixingIssues() {
    if(!list.classList.contains("active")) {
        drop.classList.remove("active");
    }
}

fixingIssues();

