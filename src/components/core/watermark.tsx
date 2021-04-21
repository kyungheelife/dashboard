import React, { FunctionComponent } from "react"

type program_info = {
    title: string,
    version: string
}

export const WatermarkDIV: FunctionComponent<program_info> = ({title, version}) => 
<div id="watermark">
    <span id="wm_01">{title}</span>
    <span id="wm_02">{version}</span>
</div>