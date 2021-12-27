import React from "react"

const Search = ({ searchString, setSearchString, selectedCountries, handleSearchButton }) => {
	const handleSearch = (event) => {
		setSearchString(event.target.value)
	}

	if (selectedCountries.length > 1 && selectedCountries.length <= 10) {
		return (
			<div>
				find country <input value={searchString} onChange={handleSearch} />
				{selectedCountries.map((c) => (
					<li key={c.name.common}>{c.name.common} <button key={`${c.name.common}_b`} onClick={() => handleSearchButton(c.name.common)}>show</button></li>
				))}
			</div>
		)
	} else {
		return (
			<div>
				find country <input value={searchString} onChange={handleSearch} />
			</div>
		)
	}
}

export default Search