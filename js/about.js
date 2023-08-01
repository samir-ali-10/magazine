let acc = document.querySelectorAll(".goals .content .accordion .acc"),
    accHead = document.querySelectorAll(".goals .content .accordion .acc .head"),
    accParagraph = document.querySelectorAll(".goals .content .accordion .acc p");

for (let index = 0; index < accHead.length; index++) {
    const element = accHead[index];
    for (let index = 0; index < accParagraph.length; index++) {
        const elementParagraph = accParagraph[index];
        element.addEventListener("click", () => {
            for (let index = 0; index < accParagraph.length; index++) {
                const element = accParagraph[index];
                element.classList.remove("active");

            }
            for (let index = 0; index < accHead.length; index++) {
                const element = accHead[index];
                element.classList.remove("active");

            }
            element.classList.add("active");
            if (element.getAttribute("data-count") === "1") {
                accParagraph[0].classList.add("active");
            }
            if (element.getAttribute("data-count") === "2") {
                accParagraph[1].classList.add("active");
            }
            if (element.getAttribute("data-count") === "3") {
                accParagraph[2].classList.add("active");
            }
            if (element.getAttribute("data-count") === "4") {
                accParagraph[3].classList.add("active");
            }
        })
    }
}

//////////////////////////////////////////////////////////////////

let slider = document.querySelector(".sponsors .slider"),
    slides = document.querySelectorAll(".sponsors .slider .slide img"),
    slidesURL = ["imgs/slide_1.webp", "imgs/slide_2.webp", "imgs/slide_3.webp", "imgs/slide_4.webp", "imgs/slide_5.webp"],
    counter = 0;

function sliding() {
    for (let index = 0; index < slides.length; index++) {
        if (counter === slidesURL.length) {
            counter = 0;
        }
        slides[index].setAttribute("src", slidesURL[counter])
        counter++;
    }
}


setInterval(sliding, 3000)


