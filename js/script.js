$(document).ready(function () {
    const heading = $('h1');

    $('#hide').click(function () {
        heading.hide(2000, function(){
            alert('Element ukryty')
        })

    });

    $('#show').click(function () {
        heading.show(1500);
    });

    $('#show-toggle').click(function () {
        heading.toggle(1500);
    });

    $('#fade-out').click(function () {
        heading.fadeOut(1500);
    });

    $('#fade-in').click(function () {
        heading.fadeIn(1500);
    });

    $('#fade-toggle').click(function () {
        heading.fadeToggle(1500);
    });

    $('#slide-up').click(function () {
        heading.slideUp(1500);
    });

    $('#slide-down').click(function () {
        heading.slideDown(1500);
    });

    $('#slide-toggle').click(function () {
        heading.slideToggle(1500);
    });

});