var number = document.querySelector(".number"),
    pattern = document.querySelectorAll(".pattern"),
    all = document.querySelectorAll("p"),
    card = document.querySelector("div"),
    draw = document.querySelector("input"),
    numberList = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"],
    patternList = ["♠", "♥", "♣", "◆"];

draw.addEventListener("click", function() {
    card.classList.add("turn");
    number.innerHTML = "?";
    for (var i = 0; i < pattern.length; i++) {
        pattern[i].innerHTML = "";
    }

    setTimeout(function() {
        card.classList.remove("turn");
        var numberRandom = Math.floor(Math.random() * numberList.length),
            patternRandom = Math.floor(Math.random() * patternList.length);

        number.innerHTML = numberList[numberRandom];

        if (patternList[patternRandom] == "♥" || patternList[patternRandom] == "◆") {
            for (var i = 0; i < all.length; i++) {
                all[i].classList.add("red");
            }
        } else if (patternList[patternRandom] == "♠" || patternList[patternRandom] == "♣") {
            for (var i = 0; i < all.length; i++) {
                all[i].classList.remove("red");
            }
        }

        for (var i = 0; i < pattern.length; i++) {
            pattern[i].innerHTML = patternList[patternRandom];
        }
    }, 1000);
});
