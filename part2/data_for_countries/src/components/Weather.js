import React, { useState, useEffect } from 'react'
import axios from "axios"

const Weather = ({ capital }) => {

	const [weather, setWeather] = useState("")
	const [weatherImage, setWeatherImage] = useState("")

	useEffect(() => {
		const api_key = process.env.REACT_APP_WEATHERSTACK
		axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
			.then(response => {
				setWeather(response.data.current)
				setWeatherImage(response.data.current.weather_icons[0])
			})
	}, [capital])

	return (
		<div>
			<h2>Weather in {capital}</h2>
			<div><b>temperature:</b>{weather.temperature} Celsius</div>
			<img src={weatherImage} alt="current weather" />
			<div><b>wind: </b> {weather.wind_speed} km/h direction {weather.wind_degree} degrees</div>
		</div>
	)
}

export default Weather