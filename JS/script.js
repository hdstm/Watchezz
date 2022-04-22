$(document).ready(function() {

    // change 3 line to an X after minimazing the width of website
    $('.nav-button').click(function() {
        $('.nav-button').toggleClass('change');
    });

    // shrink navbar 
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if (position >= 200) {
            $('.nav-menu').addClass('custom-navbar');
        } else {
            $('.nav-menu').removeClass('custom-navbar');

        }
    });

    // photo animation 
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if (position >= 303) {
            $('.camera-img').addClass('anim2_fromleft');
            $('.mission-text').addClass('anim2_fromleft');
        } else {
            $('.camera-img').removeClass('anim2_fromleft');
            $('.mission-text').removeClass('anim2_fromleft');
        }
    });

    window.setInterval(function() {
        let inscription = document.getElementById('inscription');
        if (inscription.innerHTML === "INSCRIPTION") {
            inscription.onmouseover = function() {
                inscription.innerHTML = "Connecter"
            };
        } else {
            inscription.innerHTML = "INSCRIPTION";
        }
    }, 3000);
    
});