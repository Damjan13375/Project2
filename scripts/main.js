

$(document).ready(function () {
    AOS.init(); //Ovaa e za AOS biblioteka za animacii




    // plus minus :D



    // menito na scroll da se menuva boja


    var scroll = $(window).scrollTop();

    setInterval(function () {
        if ($(".navbar-collapse").attr("aria-expanded")) {
            console.log("wat2");

            if ($("#nav1").find(".CHECKME").attr("aria-expanded") === "false") {

                console.log("wat3");
                if (scroll > 20) {
                    console.log("wat4");

                    $("#nav1").css({ height: "70px", background: "transparent" });

                }
                if (scroll < 20) {
                    console.log("wat5");

                    $("#nav1").css({ height: "70px", background: "white" });

                }



            }
            else {
                $("#nav1").css({ height: "100vh", background: "#242424" });
                $(".navbar-right").css({ textAlign: "center", background: "#242424" });
                $(".navbar-nav>li>a").css("color", "white");
                $("body").css("overflow", "hidden");
                console.log("wat");
            }
        }
    }, 500);
    if (scroll > 10) {
        $("#nav1").css("background", "white");
        $(".upperCase").css("color", "black");
        $("#link4").css("color", "white");
        $("#logo2").css("display", "block");
        $("#logo1").css("display", "none");

    }

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 10) {
            $("#nav1").css("background", "white");
            $(".upperCase").css("color", "black");
            $("#link4").css("color", "white");
            $("#logo2").css("display", "block");
            $("#logo1").css("display", "none");
            $(".linija").fadeIn(1000, "linear"); //na scroll da se spushta crvenata linija


        } else {
            $("#nav1").css("background", "transparent");
            $(".upperCase").css("color", "white");
            $("#logo2").css("display", "none");
            $(".linija").css("display", "none");
        }
        if (scroll < 10) {
            $("#logo1").css("display", "block");

        }
    });


    //na click na buttonite da ja spushta linijata nadolu

    $('.round').click(function () {
        $('.linija').css("display", "block");
    })

    //na click na kopcinjata na menito da se stava css border i boja
    if (window.location.href.indexOf("howitworks.html") > -1) {

        $('#link1').attr('id', 'redBorder');
    };

    if (window.location.href.indexOf("team.html") > -1) {

        $('#link3').attr('id', 'redBorder');
    };

    //-Ovaa e za PLUS MINUS na Gylphiconite

    $('.pointer').click(function () {
        let href = $(this).attr("href");


        let split = href.split("#");

        let novo2 = split[1];

        let href2 = $(`.COLL[id != ${novo2}]`);
        $(href2).removeClass("in");
        if ($(this).find('h3').find('span').hasClass('glyphicon-plus')) {
            $(this).find('h3').find('span').removeClass('glyphicon-plus').addClass('glyphicon-minus');


        } else if ($(this).find('h3').find('span').hasClass('glyphicon-minus')) {
            $(this).find('h3').find('span').removeClass('glyphicon-minus').addClass('glyphicon-plus');
        }
    });


    //ovaa e za site saati na svetsko nivo heheheheh

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



    //Ovaa e za Service stranata na Click da gi menuva




}); //Tuka zavrsuva ready funkcijata
