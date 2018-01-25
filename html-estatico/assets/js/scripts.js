$('.hamburguer').on('click', function () {
    // open sidebar
    $('.sidebar-menu').toggleClass('full');
    $(this).toggleClass('open');
    $('.main').toggleClass('full');
});

