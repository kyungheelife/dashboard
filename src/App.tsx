import React from "react"
import { render } from 'react-dom'
import { DashboardStyle, SpanText } from "./styles/dashboard"
import { AnimationStyle } from "./styles/animation"
import { NanumSquare } from "./styles/nanumsquare"
import { BackgroundDIV } from "./components/core/background"
import { WatermarkDIV } from "./components/core/watermark"
import { LoadingScDIV } from "./components/core/loading_sc"
import { FooterDIV } from "./components/core/FooterDIV"
import ContentDIV from "./views/content"
import { Lunch } from "./core/mainCore"
import "./core/firstLoad"
import "./core/func"

const mainElement = document.createElement('body')
document.body.appendChild(mainElement)

const App = () => {
    Lunch()
    return (
    <>
    <SpanText />
    <DashboardStyle />
    <AnimationStyle />
    <NanumSquare />

    <WatermarkDIV title="KHLIFEDASH BACKPORTED" version="Kyunghee LIFE BETA 3.0" />
    <LoadingScDIV />
    <BackgroundDIV />
    <ContentDIV />
    <FooterDIV developers="Woncheol Jung, Euiseo Cha" design="Yunho Kim, Minjae Ju" />
    </>
    )
}

render(<App />, mainElement)

