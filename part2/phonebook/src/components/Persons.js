import React from "react"

const Persons = ({personsToShow, handleDelete}) => {
  return (
    <ul>
      {personsToShow.map((p) => (
        <li key={p.name}>
        {/*Important to remember to put handleDelete as a function to the onClick! */}
          {p.name} {p.number} <button onClick={() => handleDelete(p)}>delete</button>
        </li>
      ))}
    </ul>
  )
}

export default Persons
