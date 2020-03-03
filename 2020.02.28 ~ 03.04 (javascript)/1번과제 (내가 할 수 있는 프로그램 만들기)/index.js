var player = document.querySelector("span"),
    strong = document.querySelectorAll("strong"),
    button = document.querySelector("input"),
    current = document.querySelectorAll(".current p");

player.style = "left: 45%; top: 41%;"; // 플레이어 초기 위치

for (var i = 0; i < strong.length; i++) {
    strong[i].style = "left:" + (50 + i * 3) + "%; top: " + (50 + i * 3) + "%;";
} // 적 생성

window.addEventListener("keydown", function() {
    var upDown = parseFloat(player.style.top),
        leftRight = parseFloat(player.style.left);

    if (event.keyCode == "38") {
        upDown -= 3;
        player.style.top = upDown + "%";
    }

    if (event.keyCode == "39") {
        leftRight += 1;
        player.style.left = leftRight + "%";
    }

    if (event.keyCode == "40") {
        upDown += 3;
        player.style.top = upDown + "%";
    }

    if (event.keyCode == "37") {
        leftRight -= 1;
        player.style.left = leftRight + "%";
    }

    for (var i = 0; i < strong.length; i++) {
        if (player.style.left == strong[i].style.left && player.style.top == strong[i].style.top) {
            strong[i].classList.add("active");

            current[0].innerHTML = "남은 수 : " + (10 - (i + 1));
            current[1].innerHTML = "잡은 수 : " + (i + 1);
        }
    }
}); // 플레이어 움직임

button.addEventListener("click", function() {
    location.reload(true);
}); // 다시하기 버튼