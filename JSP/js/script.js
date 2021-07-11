$(document).ready(function() {

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    if (typeof params.id !== 'undefined') {
        $("#" + params.id).addClass('in-view');
        $("#" + params.id).css('display', "block");
        $("#login").css('display', "none");
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    teste();

    async function teste() {
        var j = ["../Images/Computador.jpg", "../Images/Palmeiras.jpg"];
        $("#mydiv").css("background-image", "url(j[i])");
        for (var i = 0; i < j.length; i++) {
            $("#mydiv").css("background-image", "url(" + j[i] + ")");
            await sleep(3000);
        }
        teste();
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
                element_top_position <= window_bottom_position &&
                $element.css("display") == "block") {
                $element.addClass('in-view');
            } else {
                $element.removeClass('in-view');
            }
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');



    $("#ham").click(function() {
        $("#menu").addClass('click');
        $("#screen").css("display", "block");
    });
    $("#screen").click(function() {
        $("#menu").removeClass('click');
        $("#screen").css("display", "none");
    });


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    $("#cad").click(async function() {
        $("#login").removeClass('in-view');
        await sleep(300);
        $("#login").css("display", "none");
        $("#cadastro").css("display", "block");
        $window.trigger("scroll");
        console.log("oi");
    });

    $("#voltar").click(async function() {
        $("#cadastro").removeClass('in-view');
        await sleep(300);
        $("#cadastro").css("display", "none");
        $("#login").css("display", "block");
        $window.trigger("scroll");
    });

    $("#esq").click(async function() {
        $("#login").removeClass('in-view');
        await sleep(300);
        $("#login").css("display", "none");
        $("#esqueci").css("display", "block");
        $window.trigger("scroll");
    });

    $("#voltare").click(async function() {
        $("#esqueci").removeClass('in-view');
        await sleep(300);
        $("#esqueci").css("display", "none");
        $("#login").css("display", "block");
        $window.trigger("scroll");
    });

    $(window).on('resize', function() {
        if ($(window).width() < 1000) {
            $('#logo').addClass('col-md-6');
            $('#logo').removeClass('col-md-8');
        } else {
            $('#logo').addClass('col-md-8');
            $('#logo').removeClass('col-md-6');
        }
    })
});