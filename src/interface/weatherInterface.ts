export interface weatherMain {
    temp: number | string,
    feels_like: number | string,
    temp_min: number | string,
    temp_max: number | string,
    pressure: number | string,
    humidity: number | string,
}

export interface weatherInterface {
    id: number | string,
    main: string,
    description: string,
    icon: string   
}

export interface weatherData {
    main: weatherMain | string
    weather: weatherInterface | string
}
export interface system {
    code: number;
    message: string;
}

export interface OpenWeatherMap {
    status: boolean,
    system: system,
    data: weatherData | null
}
export interface WeatherComponentInterface {
    data: OpenWeatherMap
}
