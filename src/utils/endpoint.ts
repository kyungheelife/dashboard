import axios, { AxiosResponse } from "axios";
import { OpenWeatherMap } from "../interface/weatherInterface"
import { CoreMeal } from "../interface/mealInterface"
import { CoreCovid } from "../interface/covidInterface"
import { BACKEND_URL } from "../config"

const rootUrl = "https://"+BACKEND_URL+"/v1/dashboard";



export function fetchOpenWeatherMapAPI(): Promise<OpenWeatherMap> {
  return new Promise((resolve, reject) => {
    axios
      .get(rootUrl+"/weather/openweathermap")
      .then((resp: AxiosResponse) => resolve(resp.data))
      .catch(reject);
  });
}


export function fetchLunch(): Promise<CoreMeal> {
  return new Promise((resolve, reject) => {
    axios
      .get(rootUrl+"/meals/lunch")
      .then((resp: AxiosResponse) => resolve(resp.data))
      .catch(reject);
  });
}


export function fetchDinner(): Promise<CoreMeal> {
  return new Promise((resolve, reject) => {
    axios
      .get(rootUrl+"/meals/dinner")
      .then((resp: AxiosResponse) => resolve(resp.data))
      .catch(reject);
  });
}


export function fetchTotalCovid(): Promise<CoreCovid> {
  return new Promise((resolve, reject) => {
    axios
      .get(rootUrl+"/covid19/total")
      .then((resp: AxiosResponse) => resolve(resp.data))
      .catch(reject);
  });
}
