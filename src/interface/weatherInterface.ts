export interface weatherMain {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
}

export interface weatherInterface {
    id: number,
    main: string,
    description: string,
    icon: string   
}

export interface weatherData {
    main: weatherMain,
    weather: weatherInterface
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
