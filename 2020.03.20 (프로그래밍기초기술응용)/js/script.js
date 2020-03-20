var pop = document.querySelector(".ly-pop"),
    mainImg = pop.querySelector("img"),
    mainImgTitle = pop.querySelector("figcaption"),
    li = document.querySelectorAll(".gallery li"),
    next = document.querySelectorAll(".ly-pop a")[1],
    prev = document.querySelectorAll(".ly-pop a")[0],
    index = 0;

mainImg.addEventListener("click", function () {
    pop.classList.add("active");
})

for (var i = 0; i < li.length; i++) {
    li[i].querySelector("img").addEventListener("click", function (e) {
        pop.querySelector("img").src = e.target.getAttribute("src");
        pop.classList.remove("active");

        index = e.target.getAttribute("src").charAt(14);

        mainImgTitle.innerHTML = "gallery 0" + index;
    })
}

next.addEventListener("click", function () {
    prev.classList.remove("active");
    mainImgTitle.innerHTML = "gallery 0" + index;

    if (index == 6) {
        next.classList.add("active");
    } else {
        next.classList.remove("active");
        index++;

        pop.querySelector("img").src = "images/photo-0" + index + ".jpg";
    }
})


prev.addEventListener("click", function () {
    next.classList.remove("active");
    mainImgTitle.innerHTML = "gallery 0" + index;

    if (index == 1) {
        prev.classList.add("active");
    } else {
        prev.classList.remove("active");
        index--;

        pop.querySelector("img").src = "images/photo-0" + index + ".jpg";
    }
})
