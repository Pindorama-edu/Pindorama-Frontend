$("#ham").click(function() {
    $("#menu").addClass('click');
    $("#screen").css("display", "block");
});
$("#screen").click(function() {
    $("#menu").removeClass('click');
    $("#screen").css("display", "none");
});