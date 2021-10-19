$(document).ready(function() {
    function i() {
        var n = $(document).scrollTop();
        $(".navbar-nav .nav-item .nav-link").each(function() {
            var i = $(this),
                t = $(i.attr("href"));
            t.position().top <= n && t.position().top + t.height() > n ? ($(".navbar-nav .nav-item").removeClass("active"), $(this).closest(".navbar-nav .nav-item").addClass("active")) : i.removeClass("active")
        })
    }
    var n, t;
    $(document).on("scroll", i);
    $(".nav-link").on("click", function(n) {
        n.preventDefault();
        $(document).off("scroll");
        $(".navbar-nav .nav-item").each(function() { $(".navbar-nav .nav-item").removeClass("active") });
        $(this).closest(".navbar-nav .nav-item").addClass("active");
        var t = this.hash,
            r = t;
        $target = $(t);
        $("html, body").stop().animate({ scrollTop: $target.offset().top + 2 }, 1500, "swing", function() { $(document).on("scroll", i) })
    });
    $(window).bind("scroll", function() { $(window).scrollTop() > 50 ? $(".navbar").addClass("fixed") : $(".navbar").removeClass("fixed") });
    $("a.scroll-down").on("click", function(n) {
        n.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500, "linear")
    });
    n = "";
    $(".filter").click(function() {
        n = $(this).attr("data-rel");
        $(".portfolio-container").fadeTo(100, .1);
        $(".portfolio-container > div > div").not("." + n).fadeOut().removeClass("scale-anm-0");
        setTimeout(function() {
            $("." + n).fadeIn().addClass("scale-anm-1");
            $(".portfolio-container").fadeTo(300, 1)
        }, 300)
    });
    t = 0;
    $(window).scroll(function() {
        var n = $("#counter").offset().top - window.innerHeight;
        t == 0 && $(window).scrollTop() > n && ($(".number-box").each(function() {
            var n = $(this),
                t = n.attr("data-count");
            $({ countNum: n.text() }).animate({ countNum: t }, { duration: 2e3, easing: "swing", step: function() { n.text(Math.floor(this.countNum)) }, complete: function() { n.text(this.countNum) } })
        }), t = 1)
    });
    $(".navbar-toggler").click(function() {
        $(".navbar-collapse").show();
        $(".navbar-toggler").hide()
    });
    $(".close").click(function() {
        $(".navbar-collapse").removeClass("show");
        $(".navbar-toggler").show()
    })
});
$(window).on("load", function() {
    $(".overlay-loading .spinner").fadeOut(2e3, function() { $(this).parent().fadeOut(2e3, function() { $(this).remove() }) });
    $("body").niceScroll({ cursorcolor: "#5d86ff", cursorwidth: "7px", scrollspeed: 50, mousescrollstep: 30, background: "", cursorborder: 0, cursorborderradius: "25px" })
})