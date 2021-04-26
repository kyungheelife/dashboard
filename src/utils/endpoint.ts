import axios, { AxiosResponse } from "axios";
import { OpenWeatherMap } from "../interface/weatherInterface"
import { BACKEND_URL } from "../config"

const url = "https://"+BACKEND_URL+"/v1/dashboard/weather/openweathermap";


export function fetchOpenWeatherMapAPI(): Promise<OpenWeatherMap> {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((resp: AxiosResponse) => resolve(resp.data))
      .catch(reject);
  });
}
