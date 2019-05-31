$(function () {
    AOS.init();
    let counter = 0;
    $(".bgCarousel").css("background-image", "url('img/market.jpg')");
    $(".carrousel").attr("src", "img/43.png");

    var scroll = $(window).scrollTop();

    // izgleda cudno i e mozebi loso, megjutoa quick fix e :D
    setInterval(function () {
        if ($(".navbar-collapse").attr("aria-expanded")) {
            if ($("#nav1").find(".mobileContainer").find(".navbar-collapse").attr("aria-expanded") === "false") {
                if (scroll > 20) {
                    $("#nav1").css({ height: "70px", background: "transparent" });

                }
                if (scroll < 20) {
                    $("#nav1").css({ height: "70px", background: "white" });

                }
                $("body").css("overflow", "auto");


            }
            else {
                $("#nav1").css({ height: "100vh", background: "#242424" });
                $(".navbar-right").css({ textAlign: "center" });
                $(".navbar-nav>li>a").css("color", "white");
                $("body").css("overflow", "hidden");
                console.log("wat");
            }
        }
    }, 500);
    let images = [
        {
            bg: "url('img/market.jpg')",
            src: "img/43.png",
        },
        {
            bg: "url('img/coding.jpg')",
            src: "img/44.png",
        },
        {
            bg: "url('img/branding (2).jpg')",
            src: "img/4233.png",
        },
    ]
    setInterval(function () {

        $(".bgCarousel").css("background-image", `${images[counter].bg}`);
        $(".carrousel").attr("src", `${images[counter].src}`);
        counter++;
        if (counter >= images.length) {
            counter = 0;
        }


    }, 5000);

    $("#logo2").css("display", "none");


    if (scroll > 20) {
        $("#nav1").css("background", "white");
        $(".upperCase").css("color", "black");
        $("#link4").css("color", "white");
        $("#logo2").css("display", "block");
        $("#logo1").css("display", "none");

    }
    let littleIcon = document.querySelector(".littleIcon");
    let bound = littleIcon.getBoundingClientRect();
    console.log(bound);

    let isInViewport = function (elem) {
        var bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 20) {
            $("#nav1").css("background", "white");
            $(".upperCase").css("color", "black");
            $("#link4").css("color", "white");
            $("#logo2").css("display", "block");
            $("#logo1").css("display", "none");


        } else {
            $("#nav1").css("background", "transparent");
            $(".upperCase").css("color", "white");
            $("#logo2").css("display", "none");




        }
        if (scroll < 20) {
            $("#logo1").css("display", "block");

        }
        if (isInViewport(littleIcon)) {
            $(".lineSlide").animate({
                marginLeft: "0",
                width: "90px"
            })
        }
    });


    $(".heading1").fadeIn(500, function () {
        $(".fade1").fadeIn(500, function () {
            $(".fade2").fadeIn(500);
        });
    });
    function checkDate() {
        //new york
        let currentDateNY = new Date();
        var hourDegreeNY = ((currentDateNY.getHours() - 6) + currentDateNY.getMinutes() / 60) / 12 * 360;
        var minuteDegreeNY = currentDateNY.getMinutes() / 60 * 360;
        $('.nyH').css({ transform: 'rotate(' + hourDegreeNY + 'deg)' });
        $('.nyM').css({ transform: 'rotate(' + minuteDegreeNY + 'deg)' });

        //london
        let currentDateLon = new Date();
        var hourDegreeLon = ((currentDateLon.getHours() - 1) + currentDateLon.getMinutes() / 60) / 12 * 360;
        var minuteDegreeLon = currentDateLon.getMinutes() / 60 * 360;
        $('.lH').css({ transform: 'rotate(' + hourDegreeLon + 'deg)' });
        $('.lM').css({ transform: 'rotate(' + minuteDegreeLon + 'deg)' });
        //toronto
        let currentDateTor = new Date();
        var hourDegreeTor = ((currentDateTor.getHours() - 6) + currentDateTor.getMinutes() / 60) / 12 * 360;
        var minuteDegreeTor = currentDateTor.getMinutes() / 60 * 360;
        $('.tH').css({ transform: 'rotate(' + hourDegreeTor + 'deg)' });
        $('.tM').css({ transform: 'rotate(' + minuteDegreeTor + 'deg)' });
        //hong kong
        let currentDateHK = new Date();
        var hourDegreeHK = ((currentDateHK.getHours() + 6) + currentDateHK.getMinutes() / 60) / 12 * 360;
        var minuteDegreeHK = currentDateHK.getMinutes() / 60 * 360;
        $('.hkH').css({ transform: 'rotate(' + hourDegreeHK + 'deg)' });
        $('.hkM').css({ transform: 'rotate(' + minuteDegreeHK + 'deg)' });
        //bucharest
        let currentDateB = new Date();
        var hourDegreeB = ((currentDateB.getHours() + 1) + currentDateB.getMinutes() / 60) / 12 * 360;
        var minuteDegreeB = currentDateB.getMinutes() / 60 * 360;
        $('.bH').css({ transform: 'rotate(' + hourDegreeB + 'deg)' });
        $('.bM').css({ transform: 'rotate(' + minuteDegreeB + 'deg)' });

        //warsaw
        let currentDateW = new Date();
        var hourDegreeW = (currentDateW.getHours() + currentDateW.getMinutes() / 60) / 12 * 360;
        var minuteDegreeW = currentDateW.getMinutes() / 60 * 360;
        $('.wH').css({ transform: 'rotate(' + hourDegreeW + 'deg)' });
        $('.wM').css({ transform: 'rotate(' + minuteDegreeW + 'deg)' });

    }
    console.log($(document).width());
    if ($(document).width() > 770) {
        console.log("ovanemasmisla");
        $(".hoverable").hover(function () {
            $(this).find("h4").css("color", "white");
            $(this).find(".pHoverable").css("color", "rgba('0,0,0,0.5')");


            //znam deka vrakja true megjutoa pravese problem dokolku ne bese so ===
            if ($(this).hasClass("firstHover") === true) {
                $(this).css({
                    backgroundImage: "url('img/coding(2).jpg')",
                    backgroundSize: "cover"

                });

            }
            if ($(this).hasClass("secondHover") === true) {
                $(this).css({
                    backgroundImage: "url('img/deal.jpg')",
                    backgroundSize: "cover"

                });

            } if ($(this).hasClass("thirdHover") === true) {
                $(this).css({
                    backgroundImage: "url('img/march.jpg')",
                    backgroundSize: "cover"

                });

            } if ($(this).hasClass("fourthHover") === true) {
                $(this).css({
                    background: "url('img/plan.jpg') center",
                    backgroundSize: "cover"

                });

            }


            $(this).find(".pHoverable").hover(function () {
                $(".pHoverable").css("color", "white");
            }), function () {
                $(this).find(".pHoverable").mouseleave(function () {
                    $(".pHoverable").css("color", "rgba(0,0,0,0.5)");
                });
            }
            $(this).find(".dark").css({ backgroundColor: "rgba(0, 0, 0, 0.5)" });


        }, function () {
            $(this).find("h4, .pHoverable").css("color", "black");
            $(this).css({
                backgroundImage: "",
                backgroundSize: "cover"

            });
            $(this).find(".dark").css({ backgroundColor: "white" });

        });
    }
    $(".arrowUp").on("click dblclick", function () {
        console.log($(".longImg").css("top"))
        if ($(".longImg").css("top") >= "0px") {
            console.log("You can't go that way");
        }
        else {
            $(".longImg").animate({
                top: "+=40px"
            });
        }
    });
    $(".arrowDown").click(function () {

        $(".longImg").animate({
            top: "-=40px"
        });


    });


    checkDate();
    setInterval(checkDate, 1000);
});