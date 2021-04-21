import { createGlobalStyle } from 'styled-components'
import backgroundPng from "./images/background.png"

export const SpanText = createGlobalStyle`
  .A350 {
    font-weight: 300;
  }
`
// const images = require('./images/background.png')

export const DashboardStyle = createGlobalStyle`
/* ======================
* ======= Main ======= *
====================== */ 

html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: hidden;
    font-family: 'NanumSquare', sans-serif;
    color:#ffffff;

    background-color: #000;
}

/* 공통 */
.float-left { 
  float: left; 
}
.float-right { 
  float: right; 
}
.font-weight300 { 
  font-weight: 300; 
}
.font-weight400 { 
  font-weight: 400; 
}
.font-weight700 { 
  font-weight: 700; 
}
.font-weight800 { 
  font-weight: 800; 
}
.text-align_left { 
  text-align: left; 
}
.text-align_center { 
  text-align: center; 
}
.text-align_right { 
  text-align: right;
}
.table { 
  display: table; 
  table-layout: fixed;
}
.table-cell { 
  display: table-cell; 
}
.vertical-align_middle { 
  vertical-align: middle; 
}
.padding_l2 { 
  margin-left: 2%;
}
.padding_r2 { 
  margin-right: 2%; 
}
.padding_l07 {
  margin-left: 0.7%; 
}
.padding_r07 { 
  margin-right: 0.7%; 
}
.span_width100height50 { 
  width: 100%; 
  height: 50%; 
  display: inline-block; 
}
.info-title { 
  padding-right: 4%; 
}
.bar { 
  font-size: 3vw; 
  font-weight: 400; 
  vertical-align: text-bottom; 
  margin: 0 0.7%; 
}

/* ======================
* ===== WaterMark ===== *
====================== */ 

div#watermark {
    width: auto;
    height: auto;
    float: right;
    top: 12%; right: 0;
    position: absolute;
    overflow: hidden;
    opacity: 1;
    align-items: center;
    justify-content: center;
    background-color: #ffffff00;
    z-index: 1000000;
}
    
#watermark>#wm_01 {
    width:100%;
    font-size: 2.7vw;
    text-align: right;
    font-weight: 800;
    color: #0000004b;
    float: right;
    padding-top: 15%;
    padding-right: 2%;
}

#watermark>#wm_02 {
    font-size: 1.4vw;
    font-weight: 600;
    color: #0000004b;
    float: right;
    padding-right: 2%;
}

/* ======================
* === Loading Screen === *
====================== */ 

#loadingScreen {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 10000000;
    background-color: #000000;
}

#loader {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
    border: 7px solid #7a7a7a;
    border-radius: 50%;
    border-top: 7px solid #f3f3f3;
    width: 120px;
    height: 120px;
    animation: loading_spin 1.2s linear infinite;
}

/* ======================
* ===== Background ===== *
====================== */ 

#background {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 100;
    background: linear-gradient(
        rgba(0, 0, 0, 0.5), 
        rgba(0, 0, 0, 0.5)
      ),url(${backgroundPng});
    background-size: cover;
    transform: scale(1.2);
    filter: blur(3px);
}

#backgroundVideo {
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
}
/* ======================
* ===== DashBoard ===== *
====================== */

#dashboard {
  width: 96%;
  height: 96%;
  margin: 2%;
  position: absolute;
  z-index: 1000;
}


/* Top */

#dashboard>.top {
  width: 100%;
  height: 10%;
  position: relative;
  top: -30%;
}

#dashboard>.top>.title,
#dashboard>.top>.info {
  width: 50%;
  height: 100%;
}

.KHLIFE {
  font-size: 4.2vw;
}

.grade {
  font-size: 3.0vw;
  vertical-align: text-bottom;
}

.clock {
  font-size: 3.2vw;
  vertical-align: text-bottom;
}

.temp {
  font-size: 3.7vw;
  vertical-align: super;
}

.weather {
  font-size: 2.6vw;
  vertical-align: text-bottom;
}

.clock_blink {
  animation: dashboard_clock 1s ease 0s infinite alternate backwards;
}


/* Content */

#dashboard>.content {
  width: 93%;
  height: 85%;
  position: relative;
  margin: 2% auto 0 auto;
  bottom: -100%;
}

#dashboard>.content>.left {
  width: 59%;
  height: 100%;
}

#dashboard>.content>.right {
  width: 41%;
  height: 100%;
}

.date_info {
  width: 100%;
  height: 39%;
}

.date_info-text {
  width: 100%;
  height: 17%;
  font-size: 1.7vw;
}

.date_info-date {
  width: 100%;
  font-size: 5.2vw;
}

.weather_info {
  width: 100%;
  height: 30%;
  padding-top: 5%;
}

.weather_info-text {
  width: 100%;
  height: 30%;
  font-size: 2.6vw;
  padding-top: 1%;
}

.air_quality_num {
  animation-fill-mode: forwards;
}

.today-event {
  width: 100%;
  height: 20%;
}

.today-event_text {
  width: 100%;
  height: 30%;
  font-size: 2.6vw;
}

.event_info {
  width: 100%;
  height: 40%;
}

.event_info-block {
  width: 100%;
  height: 20%;
}

.event_info-section {
  display: block;
  width: 100%;
  height: 25%;
  font-size: 2.6vw;
  padding: 2% 0;
}

.event_info-name {
  width: 80%;
  float: left;
  font-weight: 300;
}

.event_info-day {
  width: 20%;
  float: right;
  font-weight: 800;
  text-align: right;
}

.meal_info {
  width: 100%;
  height: 60%;
  margin-top: 2%;
}

.meal_info-title {
  width: 100%;
  height: 10%;
  margin-bottom: 10%;
  font-size: 2.6vw;
  font-weight: 800;
}

.meal_info-list {
  width: 100%;
  height: 80%;
  line-height: 155%;
  font-size: 1.9vw;
  font-weight: 300;
}

.meal_info-lunch {
  width: 55%;
  height: 100%;
  float: left;
}

.meal_info-dinner {
  width: 45%;
  height: 100%;
  float: right;
}
/* ======================
* ==== Image Slider ==== *
====================== */

#image_slider {
  width: 100%;
  height: 100%;
  margin: 0;
  top: 100%;
  position: absolute;
  overflow: hidden;
  background-color: #000000;
  z-index: 100000;
}

.mySlides {
  display: none;
}

img {
  vertical-align: middle;
}

.image_container {
  max-width: 100%;
  position: relative;
  margin: auto;
}

.image_num {
  top: 0;
  position: absolute;
  color: #ffffff;
  font-size: 1vw;
  padding: 8px 12px;
}

.fade {
  animation-name: fade;
  animation-duration: 0.3s;
}

@keyframes fade {
  from {
    opacity: .4
  }
  to {
    opacity: 1
  }
}


/* ======================
* ======= Footer ======= *
====================== */

#footer {
  width: 100%;
  height: 2.5%;
  position: absolute;
  z-index: 1000000;
  bottom: 0%;
}

.footer_text {
  width: 48%;
  height: 100%;
  color: #ffffffc2;
}
`
