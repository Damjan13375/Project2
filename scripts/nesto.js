// $('.branding').click(function () {
//     $('.servicesDesc').html(` <li> Art & Creative Direction </li>
//   <li>Brand Identity </li>
//   <li> Logo Design</li>
//   <li>Graphic Guidelines </li>
//   <li> Illustration</li>
//     <li> Typography</li>
//       <li>Strategy</li>
//   `);
//     $('.branding').css({ 'color': 'white', 'background-color': 'black' });
//     $('.coding').css({ 'color': 'black', 'background-color': '#50d8a2' });
//     $('.marketing').css({ 'color': 'black', 'background-color': '#50d8a2' });
// })

// $('.coding').click(function () {
//     $('.servicesDesc').html(`<li>Web Design</li>
//              <li>Mobile & App Design</li>
//              <li>Branding</li>
//              <li>E-Commerce</li>
//              <li>
//              CMS (WordPress & Prestashop)
//            </li>
//              <li> UI • UX Responsive </li>
//              <li> Templating</li>
//              <li>
//               Front-End & Back-End Development
//              </li>`);
//     $('.coding').css({ 'color': 'white', 'background-color': 'black' });
//     $('.branding').css({ 'color': 'black', 'background-color': '#50d8a2' });
//     $('.marketing').css({ 'color': 'black', 'background-color': '#50d8a2 ' });
// })

// $('.marketing').click(function () {
//     $('.servicesDesc').html(`<li>Lead Generation</li>
//              <li>Search Engine Optimization</li>
//              <li>Social Media Marketing</li>
//              <li>PPC and paid search management</li>
//              <li>
//              Strategy
//            </li>
//              <li>Display and Advertising Marketing</li>
//              <li> Conversion Rate Optimisation</li>
//              <li>
//               Growth Hacking
//              </li>
//              <li>
//               Side Project Marketing
//              </li>
//              <li>
//               Email Marketing
//              </li>
//              <li>
//              Content Marketing
//              </li>
//              <li>Digital Event Amplification </li>`);
//     $('.marketing').css({ 'color': 'white', 'background-color': 'black' });
//     $('.branding').css({ 'color': 'black', 'background-color': '#50d8a2' });
//     $('.coding').css({ 'color': 'black', 'background-color': '#50d8a2 ' });
// })
//     ;
// $("body").bind('mousewheel', function (e) {
//     console.log(e.originalEvent.wheelDelta);
//     if (e.originalEvent.wheelDelta / 120 > 0) {
//         console.log("one");
//         $
//     }
//     else {
//         console.log("two");

//     }
// });
$(function () {
    //list arrays
    let codingList = ['Web Design', 'Mobile & App Design', 'E-Commerce', 'CMS (WordPress & Prestashop)', 'UI • UX Responsive', 'Templating', 'Creative Front-End & Back-End Development'];
    let marketingList = ['Lead Generation', 'Social Media Marketing', 'Search Engine Optimization', 'PPC and paid search management', 'Strategy', 'Display and Advertising Recapture Marketing', 'Conversion Rate Optimisation', 'Growth Hacking', 'Side Project Marketing', 'Email Marketing', 'Content Marketing', 'Digital Event Amplification', 'Digital Marketing Trainings'];
    let brandingList = ['Art & Creative Direction', 'Brand Identity', 'Logo Design', 'Graphic Guidelines', 'Illustration', 'Typography', 'Print', 'Strategy'];

    function listDisplay(listArray) {
        $('.servicesDesc').html('');
        listArray.forEach(element => {
            $('.servicesDesc').append(`<li>${element}</li>`)
        });
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    }

    // function highlight() {
    //     $(this).addClass('active');
    //     $(this).siblings().removeClass('active');
    // }

    $('.coding').on('click', function () {
        // highlight().bind(this);
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        listDisplay(codingList);
    });
    $('.marketing').on('click', function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        listDisplay(marketingList)
    });
    $('.branding').on('click', function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        listDisplay(brandingList)
    });
    // $('#coding').click();

    //change lists on click

    //change lists on scroll
    let s = 0;
    $('body').on('wheel', function (e) {
        if (e.originalEvent.wheelDelta < 0) {
            // s++;
            s < 3 ? s++ : null;
            if (s === 1) {
                $('.coding').click();
            }
            if (s === 2) {
                $('.marketing').click();
            }
            if (s === 3) {
                $('.branding').click();
            }
        } else {
            // s--;
            s > 1 ? s-- : null;
            if (s === 1) {
                $('.coding').click();
            }
            if (s === 2) {
                $('.marketing').click();
            }
            if (s === 3) {
                $('.branding').click();
            }
        }
    })

});






