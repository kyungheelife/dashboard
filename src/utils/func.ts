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
                airQualityVisible(false);
            }, 3000);
        });
    });

    $("#loadingScreen").one("animationend", () => {

    });
}

export const loadingScreen = (value: boolean = true) => {
    if(value == true) {
        $("#loadingScreen").css("animation", "loadingscreen_visible 1.2s reverse ease forwards");
    } else {
        $("#loadingScreen").css("animation", "loadingscreen_visible 1.2s ease both");
        $("#loadingScreen").one("animationend", () => {
            $("#loader").css("animation", "");
            $("#loadingScreen").css({"opacity": 0, "animation": ""});
        });
    }
}

export const contentVisible = (value: boolean= true) => {
    if(value == true) {
        $(".top").css("animation", "dashboard_top-visible 1.3s ease both");
        $(".content").css("animation", "dashboard_content-visible 1.3s ease both");
    } else {
        $("#loadingScreen").css("animation", "loadingscreen_visible 1.2s ease both");
    }
}


export const imageSlider = (value: boolean = true) => {
    if(value == true) {
        $("#image_slider").css("animation", "content_change 0.7s ease both");
    } else {
        $("#image_slider").css("animation", "content_change 0.7s reverse both");
    }
}

export const airQualityVisible = (value: boolean = true) => {
    if(value == true) {
        $(".top").css("animation", "dashboard_top-visible 1.3s ease both");
        $(".content").css("animation", "dashboard_content-visible 1.3s ease both");
    } else {
        $("#air_quality_num").css("animation", "dashboard_item-visible 1.2s ease both");
        $("#air_quality_num").one("animationend", () => {
            $("#air_quality_num").css({"margin-left": "2%", "opacity": 0});
        });
    }
}
