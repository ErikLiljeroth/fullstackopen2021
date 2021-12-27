import React, { useState, useEffect } from "react"
import axios from "axios"

import CountryView from './components/CountryView'
import Search from './components/Search'

const App = () => {
  //const [displayCountry, setDisplayCountry] = useState("")
  const [searchString, setSearchString] = useState("")
  const [allCountries, setAllCountries] = useState([])
  const [weather, setWeather] = useState([])

  const selectedCountries = allCountries.filter((c) =>
    c.name.common.toLowerCase().includes(searchString.toLowerCase())
  )

  const handleSearchButton = (cname) => {
    setSearchString(cname)
  }

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setAllCountries(response.data)
    })
  }, [])

  return (
    <div>
      <h1>Data for countries</h1>
      <Search
        searchString={searchString}
        setSearchString={setSearchString}
        selectedCountries={selectedCountries}
        handleSearchButton={handleSearchButton}
      />
      <CountryView selectedCountries={selectedCountries} weather={weather} setWeather={setWeather} />
    </div>
  )
}

export default App