var scroll = $(window).scrollTop();


if (scroll > 20) {
    $("#nav1").css("background", "white");
    $(".upperCase").css("color", "black");
    $("#link4").css("color", "white");
    $("#logo2").css("display", "block");
    $("#logo1").css("display", "none");

}
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 20) {
        $("#nav1").css("background", "white");
        $(".upperCase").css("color", "black");
        $("#link4").css("color", "white");
        $("#logo2").css("display", "block");


    } else {
        // $("#nav1").css("background", "transparent");
        $(".upperCase").not(".linkButton").css("color", "black");
        $("#logo2").css("display", "block");





    }
    if (scroll < 20) {
        $("#logo1").css("display", "block");

    }
});

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

checkDate();
setInterval(checkDate, 1000);