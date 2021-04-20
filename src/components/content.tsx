import React, { FunctionComponent } from "react"


export const ContentDIV: FunctionComponent = () => 
    <div id="content">
        <div id="dashboard">
            <input type="hidden" id="dest_ip"/>
                <div className="top">
                    <div className="title float-left text-align_left table">
                        <div className="table-cell vertical-align_middle">
                            <span className="KHLIFE padding_l2 font-weight800">경희<span className="A350"> 라이프</span></span>
                            <span className="bar">  |  </span>
                            <span id="grade" className="grade font-weight700">0학년</span>
                        </div>
                    </div>
                <div className="info float-right text-align_right table">
                    <div className="table-cell vertical-align_middle">
                        <span id="clock" className="clock padding_05 font-weight700">
                            <span id="hour">오전 00</span>
                            <span className="clock_blink">:</span>
                            <span id="minute">00</span>
                            <span className="clock_blink">:</span>
                            <span id="second">00</span>
                        </span>
                        <span className="bar">  |  </span>
                        <span id="temperature" className="temp font-weight700">00°</span>
                        <span id="weather" className="weather padding_l07 padding_r2 font-weight300">알 수 없음</span>
                    </div>
                </div>
            </div>
        </div>     
    </div>