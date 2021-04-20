import $ from "jquery"


export const mainLoading = () => {
    $("#loadingScreen").css("animation", "loadingscreen_visible 1.2s ease both");
    $("#loadingScreen").one("animationend", () => {
        $("#loader").css("animation", "");
        $("#loadingScreen").css({"opacity": 0, "animation": ""});

        $(".top").css("animation", "dashboard_top-visible 1.3s ease both");
        $(".content").css("animation", "dashboard_content-visible 1.3s ease both");

        $(".top").on("animationend", () => {
            $(".top").css({"opacity": 1, "animation": "", "top": "0%"});
            $(".content").css({"opacity": 1, "animation": "", "bottom": "0%"});
            setTimeout(() => {
                // air_quality_visible(false);
                // $("#backgroundVideo").get(0).pause();
            }, 3000);
        });
    });

    $("#loadingScreen").one("animationend", () => {

    });
}