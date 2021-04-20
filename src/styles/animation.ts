import { createGlobalStyle } from 'styled-components'



export const AnimationStyle = createGlobalStyle`

/* ======================
* === Loading Screen === *
====================== */ 

@keyframes loading_spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes loadingscreen_visible {
    0% { opacity: 1; }
    100% { opacity: 0; }
}



/* ======================
* ===== Dashboard ===== *
====================== */ 

@keyframes dashboard_clock {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

@keyframes dashboard_item-visible {
    0% { opacity: 1; }
    100% {
        margin-left: 2%;
        opacity: 0;
    }
}

@keyframes dashboard_content-visible {
    0% { 
        opacity: 0;
        bottom: -100%;
    }
    100% {
        opacity: 1;
        bottom: 0%;
    }
}

@keyframes dashboard_top-visible {
    0% { 
        opacity: 0;
        top: -30%;
    }
    100% {
        opacity: 1;
        top: 0%;
    }
}

@keyframes dashboard_content-show {
    0% { 
        opacity: 0;
        bottom: -100%;
    }
    100% {
        opacity: 1;
        bottom: 0%;
    }
}



/* ======================
* ====== Content ====== *
====================== */ 

@keyframes content_change {
    0% { top: 100%; }
    100% { top: 0%; }
}
`
