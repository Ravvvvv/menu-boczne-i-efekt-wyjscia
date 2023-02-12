$(document).ready(function () {

    $('.hamburger').click(function () {
        console.log('klik')
        $('.main-menu').toggleClass('open');


    });

    $('.main-menu-item a').click(function(e){
        e.preventDefault();

        // PREVENT DEfualt  zatrzymuje funkcje i inne dzialania 
        $('body').fadeOut(2000, function(){
            window.location.href = $(e.target).attr('href');
        });
    });
})