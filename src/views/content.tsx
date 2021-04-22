import React, { Component } from "react"
import {
    SchoolInfo,
    ScTimeInfo,
    DateInfo,
    WeatherInfo,
    WeEventInfo,
    MealInfo,
    EventDIV
} from "../components/content/dash"



export default class ContentDIV extends Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
        <div id="content">
            <div id="dashboard">
                <input type="hidden" id="dest_ip"/>
                <div className="top">
                    <SchoolInfo />
                    <ScTimeInfo />
                </div>
                <div className="content">
                    <div className="left float-left">
                        <DateInfo />                        
                        <WeatherInfo />
                        <WeEventInfo />
                    </div>
                </div>
                <div className="right float-right">
                    <EventDIV />
                    <MealInfo />
                </div>
            </div>
            <div id="image_slider">
                <div className="image_container"></div>
                <div id="image_num" className="image_num font-weight800">? / ?</div>
            </div>
        </div>
        );
    }
}