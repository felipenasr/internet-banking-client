$('.btn-sidebar').on('click', function () {
    // open sidebar
    $('.sidebar-menu').toggleClass('full');
    $('.main').toggleClass('full');
});

$('.menu-anchor').on('click touchstart', function(e){
    $('html').toggleClass('menu-active');
    e.preventDefault();
});