function test() {
    var guias = $(".guia");
    var tabsNewAnim = $('#navbarSupportedContent');
    var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", "li", function(e) {
        $('#navbarSupportedContent ul li').removeClass("active");
        $(this).addClass('active');
        for (var i = 0; i < guias.length; i++) {
            guias[i].style.display = "none";
        }
        var active = $(this).attr("show");
        document.getElementById(active).style.display = "block";
        var activeWidthNewAnimHeight = $(this).innerHeight();
        var activeWidthNewAnimWidth = $(this).innerWidth();
        var itemPosNewAnimTop = $(this).position();
        var itemPosNewAnimLeft = $(this).position();
        $(".hori-selector").css({
            "top": itemPosNewAnimTop.top + "px",
            "left": itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
    });
}
$(document).ready(function() {
    setTimeout(function() { test(); });
});
$(window).on('resize', function() {
    setTimeout(function() { test(); }, 500);
});
$(".navbar-toggler").click(function() {
    setTimeout(function() { test(); });
});


var back, back1;
i = 0;
teste();
setInterval(teste, 3000);

function teste() {
    i++;
    if (i > 3) {
        i = 1;
        $("#mydiv").removeClass("back3");
    }
    back = "back" + (i);
    back1 = "back" + (i - 1);
    $("#mydiv").addClass(back);
    $("#mydiv").removeClass(back1);
}

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = window_top_position + window_height;

    $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = element_top_position + element_height;

        //check to see if this current container is within viewport
        if (element_bottom_position >= window_top_position &&
            element_top_position <= window_bottom_position) {
            $element.addClass('in-view');
        } else {
            $element.removeClass('in-view');
        }
    });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');