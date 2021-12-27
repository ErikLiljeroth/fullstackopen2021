import React from 'react'
import Weather from './Weather'

const CountryView = ({ selectedCountries }) => {
	if (selectedCountries.length === 1) {
		let country = selectedCountries[0]
		let capital = country.capital[0].toLowerCase()

		return (
			<div>
				<h1>{country.name.common}</h1>
				<div>capital {country.capital}</div>
				<div>population {country.population}</div>
				<h2>Spoken languages</h2>
				<ul>
					{Object.values(country.languages).map((l) => (
						<li key={l}>{l}</li>
					))}
				</ul>
				<img
					src={country.flags.png}
					alt={`Description of the ${country.name.common} flag`}
					width="300"
					height="300"
				/>
				<Weather capital={capital} />
			</div>
		)
	}
	else {
		return <div></div>
	}
}

export default CountryView