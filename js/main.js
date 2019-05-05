const second = 1000,
    minute = second * 60,
    hour = minute * 60;
    day = hour * 24;

let countDown = new Date('Sep 30, 2019 00:00:00').getTime(),
    x = setInterval(function() {
        let now = new Date().getTime(),
            distance = countDown - now;

            (document.getElementById('hours').innerText = Math.floor(
                (distance % day) / hour
            )),
            (document.getElementById('minutes').innerText = Math.floor(
                (distance % hour) / minute
            )),
            (document.getElementById('seconds').innerText = Math.floor(
                (distance % minute) / second
            ));

        //do something later when date is reached
        //if (distance < 0) {
        //  clearInterval(x);
        //  'IT'S MY BIRTHDAY!;
        //}
    }, second);


    // Slick

    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });