import React from 'react'

const SearchFilter = ({ searchString, setSearchString }) => {
  const handleSearch = (event) => {
    setSearchString(event.target.value)
  }

  return (
    <div>
      filter shown with <input value={searchString} onChange={handleSearch} />
    </div>
  )
}

export default SearchFilter
