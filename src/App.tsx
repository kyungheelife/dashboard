import React from "react"
import { render } from 'react-dom'
import { DashboardStyle, SpanText } from "./styles/dashboard"
import { AnimationStyle } from "./styles/animation"
import { NanumSquare } from "./styles/nanumsquare"
import { BackgroundDIV } from "./components/core/background"
import { TSInjector } from "./components/core/tsInject"
import { WatermarkDIV } from "./components/core/watermark"
import { LoadingScDIV } from "./components/core/loading_sc"
import { FooterDIV } from "./components/core/FooterDIV"
import ContentDIV from "./views/content"


const mainElement = document.createElement('body')
document.body.appendChild(mainElement)

const App = () => {
    return (
    <>
    <SpanText />
    <DashboardStyle />
    <AnimationStyle />
    <NanumSquare />
    <TSInjector />

    <WatermarkDIV title="KHLIFEDASH BACKPORTED" version="1910.3120_Connecting_backported.kyunghee.life" />
    <LoadingScDIV />
    <BackgroundDIV />
    <ContentDIV />
    <FooterDIV developers="Woncheol Jung, Euiseo Cha" design="Yunho Kim, Minjae Ju" />
    </>
    )
}

render(<App />, mainElement)

