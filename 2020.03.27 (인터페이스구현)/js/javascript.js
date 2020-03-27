$(function () {
    //start

    var scrollTop = 0,
        windowHeight = $(window).innerHeight();





    for (var i = 0; i < 6; i++) {
        $(".content").append(
            `<figure class="content_box slide">
                <figcaption class="content_text">
                    <i class="far fa-heart"></i>
                    <p>illustration, Logo</p>
                    <p>Work 0${i + 1}</p>
                </figcaption>
            </figure>`
        );
    }; //content 넣기
    $(".content_box").each(img); //content img 넣기

    $(".visual p").addClass("active"); //시작할 때 텍스트 애니메이션

    $(".burger_menu").on("click", menuOpen); //메뉴 열기
    $(".menus").on("click", menuClose); //메뉴 닫기

    $(".content_box").on("mouseenter", enterContent); //이미지 호버시 호버 컨텐츠 등장
    $(".content_box").on("mouseleave", leaveContent); //이미지 호버시 호버 컨텐츠 등장

    $(window).on("mousewheel", headerControl); //스크롤시 헤더 on/off
    $(window).on("scroll", slideContent); //스크롤시 컨텐츠 등장





    function img(i) { //img 넣기
        $(".content_box").eq(i).css({
            background: `url(img/contents0${i}.jpg) no-repeat center center / cover`
        })
    }

    function menuOpen() { //메뉴 열기
        $(".menus").addClass("active");
        $(".visual").addClass("active");
    }

    function menuClose() { //메뉴 닫기
        $(".menus").removeClass("active");
        $(".visual").removeClass("active");
    }

    function enterContent() {//이미지 호버시 컨텐츠 나타남
        $(this).find(".content_text").addClass("active");
    }

    function leaveContent() {//이미지 호버시 컨텐츠 나타남
        $(this).find(".content_text").removeClass("active");
    }

    function headerControl() { //스크롤시 헤더 on/off
        if (windowHeight < scrollTop) { //스크롤 내릴 때
            $("header").addClass("active");
        } else {
            $("header").removeClass("active");
        }
    }

    function slideContent() {
        scrollTop = this.scrollY;

        $(".slide").each(function (i) {
            var contentStart = $(".slide").eq(i).offset().top;

            if (contentStart - windowHeight < scrollTop) {
                $(".slide").eq(i).addClass("active");
            } else {
                $(".slide").eq(i).removeClass("active");
            }
        })
    }

    //end
})