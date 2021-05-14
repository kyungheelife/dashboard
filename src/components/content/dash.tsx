import React, { Component } from "react"
import { WeatherICON } from "../../styles/weatherIcon"
import { OpenWeatherMap, weatherMain, weatherInterface, weatherData } from "../../interface/weatherInterface"

import { CoreMeal, MealCoreComponent } from "../../interface/mealInterface"
import { CoreCovid } from "../../interface/covidInterface"
import { BACKEND_URL } from "../../config"


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






export class ListLunch extends Component<{}, MealCoreComponent> {
    constructor(props: any){
        super(props)
        this.state  = {
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
        const ws = new WebSocket(BACKEND_URL()+"/v1/ws/dashboard/school/lunch")

        const connectLunch = () => {
            ws.onopen = () => { 
                ws.send(JSON.stringify({"message": "ping"})
            )};

            ws.onmessage = (event: MessageEvent) => {
                console.log('Message:', event.data);
                
                const data: CoreMeal = JSON.parse(event.data)
                this.setState({ data: data })
            }
            
            ws.onclose = (event: CloseEvent) => {
                console.log('Socket is closed. Reconnect will be attempted in 1 second.', event.reason)
                setTimeout(() => {
                    connectLunch()
                }, 1000);
            }

            ws.onerror = (event: Event) => {
                console.error('Socket encountered error: ', event, 'Closing socket');
                ws.close()
            }
        }
        connectLunch()
    }
    public render() {
        const lunch = () => {
            if (this.state.data.data == null){
                const array = new Array()
                const a = [
                    "정보를 받아올 수 없습니다."
                ]
                for(const i in a){
                    array.push(a[i])
                }
                const list: string[] = array;
                console.log(list)
                return list
            }
            const a = JSON.parse(JSON.stringify(this.state.data.data, null, 2))
            const array = new Array()
            for(const i in a){
                array.push(a[i])
            }
            const list: string[] = array;
            console.log(list)
            return list
        }

        return (
            <div id="lunch" className="meal_info-list">{lunch().map(str => (<div id="lunch">{str}</div>))}</div>
        )
    }  
}


export class ListDinner extends Component<{}, MealCoreComponent> {
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
        const ws = new WebSocket(BACKEND_URL()+"/v1/ws/dashboard/school/dinner")
        const connectDinner = () => {
            ws.onopen = () => { 
                ws.send(JSON.stringify({"message": "ping"})
            )};

            ws.onmessage = (event: MessageEvent) => {
                console.log('Message:', event.data);

                const data: CoreMeal = JSON.parse(event.data)
                this.setState({ data: data })
            }
            
            ws.onclose = (event: CloseEvent) => {
                console.log('Socket is closed. Reconnect will be attempted in 1 second.', event.reason)
                setTimeout(() => {
                    connectDinner()
                }, 1000);
            }
            ws.onerror = (event: Event) => {
                console.error('Socket encountered error: ', event, 'Closing socket');
                ws.close()
            }
        }
        connectDinner()
    }
    public render() {
        const dinner = () => {
            if (this.state.data.data == null){
                const array = new Array()
                const a = [
                    "정보를 받아올 수 없습니다."
                ]
                for(const i in a){
                    array.push(a[i])
                }
                const list: string[] = array;
                console.log(list)
                return list
            }
            const a = JSON.parse(JSON.stringify(this.state.data.data, null, 2))
            const array = new Array()
            for(const i in a){
                array.push(a[i])
            }
            const list: string[] = array;
            console.log(list)
            return list
        }
        return (
            <div id="dinner" className="meal_info-list">{dinner().map(str => (<div id="dinner">{str}</div>))}</div>
        )
    }   
}

export class MealInfo extends Component {
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
    /*
    setState = (value: OpenWeatherMap) => {

        const defaultMain: weatherMain = {
            temp: "정보없음",
            temp_max: "정보없음",
            temp_min: "정보없음",
            feels_like: "정보없음",
            pressure: "정보없음",
            humidity: "정보없음"
        }
        const defaultWeather: weatherInterface = {
            id: "정보없음",
            main: "정보없음",
            description: "정보없음",
            icon: "정보없음"
        }
        if (value.data != null) {
            if (typeof value.data !== "string"){
                let temp = value.data
                this.state = {
                    status: value.status,
                    system: {
                        code: value.system.code,
                        message: value.system.message
                    },
                    data: temp
                }
                useState(this.state)
            }
        } else {
            this.state = {
                status: value.status,
                system: {
                    code: value.system.code,
                    message: value.system.message
                },
                data: {
                    main: defaultMain,
                    weather: defaultWeather
                }   
            }
            useState(this.state)
        }

    }
    */


    componentDidMount() {
        const ws = new WebSocket(BACKEND_URL()+"/v1/ws/dashboard/weather/openweathermap")
        const connect = () => {
            ws.onopen = function() { 
                ws.send(JSON.stringify({"message": "ping"})
            )};

            ws.onmessage = (event: MessageEvent) => {
                console.log('Message:', event.data);
                
                const data: OpenWeatherMap = JSON.parse(event.data)
                this.setState({
                    status: data.status,
                    system: data.system,
                    data: data.data
                })    
            }
            
            ws.onclose = (event: CloseEvent) => {
                console.log('Socket is closed. Reconnect will be attempted in 1 second.', event.reason)
                setTimeout(() => {
                    connect()
                }, 1000);
            }

            ws.onerror = (event: Event) => {
                console.error('Socket encountered error: ', event, 'Closing socket');
                ws.close()
            }
        }
        connect()
    }
    public render() {
        const typeChecker = () => {
            if (this.state.data != null) {
                if (typeof this.state.data !== "string") {
                    return this.state.data
                }
                return "정보없음"
            }
            return "정보없음"
        }
        const TempVerify = (value: weatherData | string) => {
            if (typeof value !== "string") {
                if (typeof value.main !== "string") {
                    return value.main.temp
                }
            } else {
                return null
            }
        }
        const IconVerify = (value: weatherData | string) => {
            if (typeof value !== "string") {
                if (typeof value.weather !== "string") {
                    return value.weather.icon
                } else {
                    return "X"
                }
            } else {
                return "X"
            }
        }
        const float2int = (value: any) => {
            if (value != null) {
                if (value == "정보없음") {
                    return value
                }
                return value | 0;
            } else {
                return "정보없음"
            }
        }
        return (
            <>
            <span id="temperature" className="temp font-weight700">{float2int(TempVerify(typeChecker()))}°</span>
            <span className="weather padding_l07 padding_r2" id="weather">
                <img className="weImg" id="weImg" src={WeatherICON(IconVerify(typeChecker()))}></img>
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
        const ws = new WebSocket(BACKEND_URL()+"/v1/ws/dashboard/covid19/total")

        const connect = () => {
            ws.onopen = function() { 
                ws.send(JSON.stringify({"message": "ping"})
            )};

            ws.onmessage = (event: MessageEvent) => {
                console.log('Message:', event.data);
                
                const data: CoreCovid = JSON.parse(event.data)
                this.setState({
                    status: data.status,
                    system: data.system,
                    source: data.source
                })    
            }
            
            ws.onclose = (event: CloseEvent) => {
                console.log('Socket is closed. Reconnect will be attempted in 1 second.', event.reason)
                setTimeout(() => {
                    connect()
                }, 1000);
            }

            ws.onerror = (event: Event) => {
                console.error('Socket encountered error: ', event, 'Closing socket');
                ws.close()
            }
        }
        connect()
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
            <span className="info-title">금일 COVID-19 확진자</span>
            <span id="air_quality" className="font-weight800">{dailyChange()}명</span>
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
    /*
    setState = (value: OpenWeatherMap) => {

        const defaultMain: weatherMain = {
            temp: "정보없음",
            temp_max: "정보없음",
            temp_min: "정보없음",
            feels_like: "정보없음",
            pressure: "정보없음",
            humidity: "정보없음"
        }
        const defaultWeather: weatherInterface = {
            id: "정보없음",
            main: "정보없음",
            description: "정보없음",
            icon: "정보없음"
        }
        if (value.data != null) {
            if (typeof value.data !== "string"){ 
                let temp = value.data
                this.state = {
                    status: value.status,
                    system: {
                        code: value.system.code,
                        message: value.system.message
                    },
                    data: temp
                }
                useState(this.state)
            }
        } else {
            this.state = {
                status: value.status,
                system: {
                    code: value.system.code,
                    message: value.system.message
                },
                data: {
                    main: defaultMain,
                    weather: defaultWeather
                }   
            }
            useState(this.state)
        }

    }
    */

    // JSON.parse(JSON.stringify(this.state.data, null, 2))
    componentDidMount() {
        const ws = new WebSocket(BACKEND_URL()+"/v1/ws/dashboard/weather/openweathermap")
        const connect = () => {
            ws.onopen = function() { 
                ws.send(JSON.stringify({"message": "ping"})
            )};

            ws.onmessage = (event: MessageEvent) => {
                console.log('Message:', event.data);
                
                const data: OpenWeatherMap = JSON.parse(event.data)
                this.setState({
                    status: data.status,
                    system: data.system,
                    data: data.data
                })    
            }
            
            ws.onclose = (event: CloseEvent) => {
                console.log('Socket is closed. Reconnect will be attempted in 1 second.', event.reason)
                setTimeout(() => {
                    connect()
                }, 1000);
            }

            ws.onerror = (event: Event) => {
                console.error('Socket encountered error: ', event, 'Closing socket');
                ws.close()
            }
        }
        connect()
    }

    public render() {
        const nowWeather =  () => {
            if (this.state.data != null) {
                if (typeof this.state.data !== "string"){
                    if (typeof this.state.data.weather !== "string"){
                        return this.state.data.weather.main
                    } else {
                        return "정보없음"
                    }
                } else {
                    return "정보없음"
                }
            } else {
                return "정보없음"
            }
        }
        return (
        <div className="weather_info font-weight300">
            <div className="weather_info-text">
                <span className="info-title">현재 날씨</span>
                <span id="now_weather" className="font-weight800">
                    {nowWeather()}
                </span>
            </div>
            <CovidInfo />
        </div>
        );
    }
   
}
