window.addEventListener("DOMContentLoaded", function() {
    var input = document.querySelectorAll("input"),
        nameInput = input[0],
        name = document.querySelector(".name"),
        sum = document.querySelector(".sum"),
        avg = document.querySelector(".avg"),
        pF = document.querySelector(".p-f"),
        resultButton = document.querySelector(".result"),
        cancelButton = document.querySelector(".cancel");

    resultButton.addEventListener("click", function() {
        if (input[0].value == "" || input[1].value == "" || input[2].value == "" || input[3].value == "") {
            alert("공백을 입력해주세요.");
        } else {
            var sumNumber = 0,
                avgNumber = 0;

            for (var i = 1; i < 4; i++) {
                sumNumber += parseInt(input[i].value);
            }
            avgNumber = sumNumber / (input.length - 1);

            name.innerHTML = nameInput.value;
            sum.innerHTML = sumNumber + "점";
            avg.innerHTML = avgNumber + "점";

            if (avgNumber >= 60) {
                pF.innerHTML = "합격";
            } else {
                pF.innerHTML = "불합격";
            }
        }
    });

    cancelButton.addEventListener("click", function() {
        for (var i = 0; i < input.length; i++) {
            input[i].value = "";
        }

        name.innerHTML = "이름을 넣어주세요.";
        sum.innerHTML = "총점을 넣어주세요.";
        avg.innerHTML = "평균을 넣어주세요.";
        pF.innerHTML = "합격/불합격";
    });
});
