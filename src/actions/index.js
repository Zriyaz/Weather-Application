import axios from "axios"

const API_KEY = '9c2ec99f7dfc0537387f2e167c94cff6'


const ROOT_URL=`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER='FETCH_WEATHER'
export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},india`
  const request = axios.get(url)
  return{
    type:FETCH_WEATHER,
    payload:request
  }
}