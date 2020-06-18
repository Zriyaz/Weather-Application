import React from "react"
import {connect} from "react-redux"
import "../styles/style.css"
import Chart from "../components/chart"
import GoogleMap from "../components/google_map"


class WeatherList extends React.Component{

  renderWeather(cityData){
    const name=cityData.city.name
    const temps=cityData.list.map(weather=>weather.main.temp)
    const pressures= cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    const {lon, lat} = cityData.city.coord
    
    return( 
      <tr key={name}>
       <td><GoogleMap lon={lon} lat={lat} /></td>
       <td><Chart data={temps} units="K" /></td>
       <td><Chart data={pressures} units="hPa" /></td>
       <td><Chart data={humidities} units="%" /></td>
    </tr>
    )
  }

  render(){
    return(
      <table className="table-bordered table table-success table-hover">
        <thead>
          <tr>
           <th>City</th>
            <th>Tempreture (K)</th>
             <th>Pressure (hPa)</th>
              <th>Humadity (%)</th>
          </tr>
        </thead>
        <tbody>
         {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}){
  return {weather}
}
export default connect(mapStateToProps)(WeatherList)