$(document).on('click', '#slidebar li', function () {
    $(this).addClass('active').siblings().removeClass('active');
});
$('.sub-menu ul').hide();
$('.sub-menu a').click(function () {
    $(this).parent(".sub-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});

$(document).ready(function () {
    $("#toggleSlidebar").click(function () {
        $(".left-menu").toggleClass("hide");
        $(".content-wrapper").toggleClass("hide");
    });
})

$(document).ready( function () {
    $('#example').DataTable();
} );