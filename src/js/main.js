;(function ($) {
    $(function () {

        $('.cake-stuffing-slider').slick({
                arrows: true,
                fade: false,
                dots: false,
                autoplay: true,
                autoplaySpeed: 5000,
                pauseOnFocus: true,
                pauseOnHover: true,
                infinite: true,
                // responsive: [
                //     {
                //         breakpoint: 969,
                //         settings: {
                //             dots: false,
                //         }
                //     }
                // ]
            });

        $('.cake-decorating-slider').slick({
            arrows: true,
            fade: false,
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnFocus: true,
            pauseOnHover: true,
            infinite: true,
            // responsive: [
            //     {
            //         breakpoint: 969,
            //         settings: {
            //             dots: false,
            //         }
            //     }
            // ]
        });
        $('.reviews-slider').slick({
            arrows: true,
            fade: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 10000,
            pauseOnFocus: true,
            pauseOnHover: true,
            infinite: true,
            // responsive: [
            //     {
            //         breakpoint: 969,
            //         settings: {
            //             dots: false,
            //         }
            //     }
            // ]
        });

    });
})(jQuery);

