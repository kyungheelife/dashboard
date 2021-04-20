import React from "react"
import { render } from 'react-dom'
import { DashboardStyle, SpanText } from "./styles/dashboard"
import { AnimationStyle } from "./styles/animation"
import { NanumSquare } from "./styles/nanumsquare"
import { BackgroundDIV } from "./components/background"
import { TSInjector } from "./components/tsInject"
import { WatermarkDIV } from "./components/watermark"
import { LoadingScDIV } from "./components/loading_sc"
import { FooterDIV } from "./components/FooterDIV"
import { ContentDIV } from "./components/content"






const mainElement = document.createElement('body')
document.body.appendChild(mainElement)

const App = () => {
    return (
    <>
    <DashboardStyle />
    <AnimationStyle />
    <NanumSquare />
    <TSInjector />
    <SpanText />
    
    <WatermarkDIV title="KHLIFEDASH BACKPORTED" version="1910.3120_Connecting_backported.kyunghee.life" />
    <LoadingScDIV />
    <BackgroundDIV />
    <ContentDIV />
    <FooterDIV developers="Woncheol Jung, Euiseo Cha" design="Yunho Kim, Minjae Ju" />
    </>
    )
}

render(<App />, mainElement)

