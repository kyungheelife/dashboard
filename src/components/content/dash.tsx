import React, { Component, useState } from "react"
import axios, { AxiosResponse } from 'axios'
import { BACKEND_URL } from "./../../config"
import { WeatherICON } from "../../styles/weatherIcon"
import { OpenWeatherMap, WeatherComponentInterface, weatherData} from "../../interface/weatherInterface"
import { fetchOpenWeatherMapAPI, fetchLunch, fetchDinner } from "../../utils/endpoint"
import { MealCoreComponent } from "../../interface/mealInterface"
import { CovidCoreComponent, CoreCovid } from "../../interface/covidInterface"
import { fetchTotalCovid } from "../../utils/endpoint"
interface DateInfoConstructor {
    dt: string,
    dy: string
}

interface DStateConstructor {
    date: DateInfoConstructor
}

export class DateInfo extends Component<{}, DStateConstructor> {
    constructor(props: any) {
        super(props)
        this.state = {
            date: this.datetime()
        }

    }

    datetime() {
        const week = ["일", "월", "화", "수", "목", "금", "토"];

        let classDate = new Date();
        let year = classDate.getFullYear();
        let month = classDate.getMonth();
        let date = classDate.getDate();
        let day = classDate.getDay();
        let dt = `${year}년 ${month+1}월 ${date}일`;
        let dy = `${week[day]}요일`;
        let obj = {
            dt: dt,
            dy: dy
        };
        return obj;

    }

    componentDidMount() {
        setInterval(() => this.setState({date: this.datetime()}), 43200);
    }
     
    public render() {
        return (
            <div className="date_info">
                <div className="date_info-text font-weight700 table">
                    <span className="table-cell vertical-align_middle">오늘은</span>
                </div>
                <div className="date_info-date font-weight800 table">
                    <span id="date" className="date_info-date span_width100height50">{this.state.date.dt}</span>
                    <span id="day" className="date_info-date span_width100height50">{this.state.date.dy}</span>
                </div>
                <div className="date_info-text font-weight700 table">
                    <span className="table-cell vertical-align_middle">입니다</span>
                </div>
            </div>
        );
    }
}

export class WeEventInfo extends Component {
    constructor(props: any) {
        super(props)

    }
    public render() {
        return (
        <div className="today-event font-weight300 table">
            <div className="today-event_text table-cell vertical-align_middle">
                <span className="info-title">알림</span>
                <span id="today_event" className="font-weight800">알림을 받아올 수 없습니다.</span>
            </div>
        </div>
        );
    }
}

export class EventDIV extends Component {
    constructor(props: any) {
        super(props)
    }

    public render() {
        return (
        <div className="event_info table">
            <div className="event_info-block table-cell vertical-align_middle">
                <div className="event_info-section">
                    <div id="event_info-name" className="event_info-name">이벤트가 없습니다</div>
                    <div id="event_info-day" className="event_info-day">0일</div>
                </div>
            </div>
        </div>
        );
    }
}



interface RespMeal {
    data: string[]
}


class ListLunch extends Component<{}, MealCoreComponent> {
    constructor(props: any) {
        super(props)
        this.state = {
            data: {
                status: true,
                system: {
                    code: 0,
                    message: ""
                },
                data: null
            }
        }
    }
    componentDidMount(){
        fetchLunch().then(
            response => this.setState({
                data: response
            })
        )
    }
    public render() {
        const lca = () => {
            if (this.state.data.data == null){
                let array = new Array()
                const a = [
                    "정보를 받아올 수<br>없습니다."
                ]
                for(let i in a){
                    array.push(a[i])
                }
                let list: string[] = array;
                console.log(list)
                return list
            }
            let a = JSON.parse(JSON.stringify(this.state.data.data, null, 2))
            let array = new Array()
            for(let i in a){
                array.push(a[i])
            }
            let list: string[] = array;
            console.log(list)
            return list
        }

        return (
            <div id="lunch" className="meal_info-list">{lca().map(str => (<div id="lunch">{str}</div>))}</div>
        )
    }   
}


class ListDinner extends Component<{}, MealCoreComponent> {
    constructor(props: any) {
        super(props)
        this.state = {
            data: {
                status: true,
                system: {
                    code: 0,
                    message: ""
                },
                data: null
            }
        }
    }
    componentDidMount(){
        fetchDinner().then(
            resp => this.setState({
                data: resp
            })
        )
    }
    public render() {
        const lca = () => {
            if (this.state.data.data == null){
                let array = new Array()
                const a = [
                    "정보를 받아올 수<br>없습니다."
                ]
                for(let i in a){
                    array.push(a[i])
                }
                let list: string[] = array;
                console.log(list)
                return list
            }
            let a = JSON.parse(JSON.stringify(this.state.data.data, null, 2))
            let array = new Array()
            for(let i in a){
                array.push(a[i])
            }
            let list: string[] = array;
            console.log(list)
            return list
        }
        return (
            <div id="dinner" className="meal_info-list">{lca().map(str => (<div id="dinner">{str}</div>))}</div>
        )
    }   
}

export class MealInfo extends Component<{}, RespMeal> {
    public render() {
        return (
        <div className="meal_info">
            <div className="meal_info-lunch"><div className="meal_info-title">중식</div><ListLunch /></div>
            <div className="meal_info-dinner"><div className="meal_info-title">석식</div><ListDinner /></div>
        </div>
        );
    }
}

export class SchoolInfo extends Component {
    constructor(props: any) {
        super(props)
    }

    public render() {
        return (
            <div className="title float-left text-align_left table">
                <div className="table-cell vertical-align_middle">
                    <span className="KHLIFE padding_l2 font-weight800">경희<span className="A350"> 라이프</span></span>
                    <span className="bar">  |  </span>
                    <span id="grade" className="grade font-weight700">0학년</span>
                </div>
            </div>
        );
    }
}



class TopWeather extends Component<{}, OpenWeatherMap> {
    constructor(props: any) {
        super(props)
        this.state = {
            status: true,
            system: {
                code: 0,
                message: ""
            },
            data: null
        }
    } 

    componentDidMount() {
        var nextDate = new Date();

        const dt = () =>  {
            return fetchOpenWeatherMapAPI().then(
                data => this.setState(
                    {
                        status: data.status,
                        system: data.system,
                        data: data.data
                    }
                )
            )
        }
        if (nextDate.getMinutes() === 0) {
            dt()
        } else {
            nextDate.setHours(nextDate.getHours() + 1);
            nextDate.setMinutes(0);
            nextDate.setSeconds(0);// I wouldn't do milliseconds too ;)

            const difference = nextDate.getDate();
            setTimeout(dt, difference);
        }
    }
    public render() {
        const float2int = (value: any) => {
            return value | 0;
        }        
        const nowWeather =  () => {
            if (this.state.data != null) {
                let status = this.state.data.weather.main
                let iconCode = this.state.data.weather.icon
                
                return [iconCode, status]
            } else {
                return ["unknown", "정보없음"]
            }
        }
        const nowTemperature = () => {
            if (this.state.data != null) {
                return this.state.data.main.temp
            } else {
                return "정보없음"
            }
        }
        return (
            <>
            <span id="temperature" className="temp font-weight700">{float2int(nowTemperature())}°</span>
            <span className="weather padding_l07 padding_r2" id="weather">
                <img className="weImg" id="weImg" src={WeatherICON(nowWeather()[0])}></img>
            </span>
            </>
        )
    }
    
}


export interface TimeConstructor {
    hours: string,
    minutes: string,
    seconds: string
}

interface DateConstructor {
    time: TimeConstructor,

}

export class ScTimeInfo extends Component<{}, DateConstructor> {

    constructor(props: any) {
        super(props);

        this.state = {
            time: this.DayTime()
        };
        
    }
    
    DayTime() {
        
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let AMPM: string;

        if(hours > 12) { hours = hours - 12; AMPM = "오후" } else { AMPM = "오전" }
        let h = `${AMPM} ${hours<10?`0${hours}`:hours}`;
        let m = `${minutes<10?`0${minutes}`:minutes}`;
        let s = `${seconds<10?`0${seconds}`:seconds}`;
        let obj = {
            hours: h,
            minutes: m,
            seconds: s
        }
        return obj
    }

    // JSON.parse(JSON.stringify(this.state.data, null, 2))
    componentDidMount() {
        setInterval(() => this.setState({time: this.DayTime()}), 1000);
    }

    render() {
        
        return (
        <div className="info float-right text-align_right table">
            <div className="table-cell vertical-align_middle">
                <span id="clock" className="clock padding_05 font-weight700">
                    <span id="hour">{this.state.time.hours}</span>
                    <span className="clock_blink">:</span>
                    <span id="minute">{this.state.time.minutes}</span>
                    <span className="clock_blink">:</span>
                    <span id="second">{this.state.time.seconds}</span>
                </span>

                <span className="bar">  |  </span>
                <TopWeather />
            </div>
        </div>
        );

    }
    
}



class CovidInfo extends Component<{}, CoreCovid> {
    constructor(props: any) {
        super(props)
        this.state = {
            status: true,
            system: {
                code: 0,
                message: ""
            },
            source: null
        }
    }
    componentDidMount() {
        let nextDate = new Date();

        const da = () => {
            return fetchTotalCovid().then(
                data => this.setState({ 
                    status: data.status,
                    system: data.system,
                    source: data.source,
                })
            )
        }
        if (nextDate.getMinutes() === 0) {
            da()
        } else {
            nextDate.setHours(nextDate.getHours() + 1);
            nextDate.setMinutes(0);
            nextDate.setSeconds(0);// I wouldn't do milliseconds too ;)

            const difference = nextDate.getDate();
            setTimeout(da, difference);
        }

    }

    public render() {
        const dailyChange =  () => {
            if (this.state.source != null) {
                return this.state.source.daily_change
            } else {
                return "정보없음"
            }
        }
        return (
        <div className="weather_info-text">
            <span className="info-title">오늘 SARS-CoV-2 확진자</span>
            <span id="air_quality" className="font-weight800">{dailyChange()}
            </span>
            <span id="air_quality_num" className="font-weight800 padding_l07"></span>
        </div>
        )
    }
}

export class WeatherInfo extends Component<{}, OpenWeatherMap> {
    constructor(props: any) {
        super(props)
        this.state = {
            status: true,
            system: {
                code: 0,
                message: ""
            },
            data: null
        }
    } 
    // JSON.parse(JSON.stringify(this.state.data, null, 2))
    componentDidMount() {
        let nextDate = new Date();

        const dt = () =>  {
            return fetchOpenWeatherMapAPI().then(
                data => this.setState(
                    {
                        status: data.status,
                        system: data.system,
                        data: data.data
                    }
                )
            )
        }
        
        if (nextDate.getMinutes() === 0) {
            dt()
        } else {
            nextDate.setHours(nextDate.getHours() + 1);
            nextDate.setMinutes(0);
            nextDate.setSeconds(0);// I wouldn't do milliseconds too ;)

            const difference = nextDate.getDate();
            setTimeout(dt, difference);
        }


    }

    public render() {
        const nowWeather =  () => {
            if (this.state.data != null) {
                return this.state.data.weather.main
            } else {
                return "정보없음"
            }
        }

        return (
        <div className="weather_info font-weight300">
            <div className="weather_info-text">
                <span className="info-title">현재 날씨</span>
                <span id="now_weather" className="font-weight800">{nowWeather()}</span>
            </div>
            <CovidInfo />
        </div>
        );
    }
   
}
