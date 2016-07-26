import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

	renderWeather(cityData) {
		const name = cityData.city.name;
		//notice the use of plural for array & singular for item; 
		//these are data points for each indiv city, not all cities
		const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => 1.8*(temp - 273) + 32);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		//const lat = cityData.city.coord.lat);
		//const lon = cityData.city.coord.lon);
		//ES6 destructure method for multiple assignation
		const {lat, lon } = cityData.city.coord;
		

		return (
			<tr key={name}>
				<td><GoogleMap lat={lat} lon={lon} /></td>
				<td><Chart data={temps} color="orange" units="F"/></td>
				<td><Chart data={pressures} color="green" units="hPa"/></td>
				<td><Chart data={humidities} color="black" units="%"/></td>		
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (F)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
				{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	} //props.weather.map cycles through multiple cities' data objects to create rows for each
}

//function mapStateToProps(state) {
//	return { weather: state.weather };
//}
//ES6 syntax
function mapStateToProps({ weather }) {
	return { weather };
}

export default connect (mapStateToProps)(WeatherList);