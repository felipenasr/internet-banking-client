$('.hamburguer').on('click', function () {
    // open sidebar
    console.log('asdcs')
    $('.sidebar-menu').toggleClass('full');
    $(this).toggleClass('open');
    $('.main').toggleClass('full');
});

