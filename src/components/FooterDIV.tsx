import React, { FunctionComponent } from "react"


type footerText = {
    developers: string,
    design: string
}

export const FooterDIV: FunctionComponent<footerText> = ({developers, design}) => 
<div id="footer">
    <div id="version" className="footer_text padding_l2 float-left"></div>
    <div id="author" className="footer_text padding_r2 float-right text-align_right">
        Develop: {developers} | Design: {design}
    </div>
</div>