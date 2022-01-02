import React, { useState, useEffect } from "react"
import SearchFilter from "./components/SearchFilter"
import PersonForm from "./components/Personform"
import Persons from "./components/Persons"
import Error from './components/Error'
import Notification from './components/Notification'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [searchString, setSearchString] = useState("")
  // Message-state for add person and alter data, to set notification
  const [notificationMessage, setNotificationMessage] = useState(null)
  // Message-state for error
  const [errorMessage, setErrorMessage] = useState(null)

  // Initialize persons as the data in db.json using http request and effect hook. Run the db with "npm run server"
  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const personsToShow = persons.filter((p) =>
    p.name.toLowerCase().includes(searchString.toLowerCase())
  )

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber,
    }

    const existingPerson = persons.find(P => P.name === personObject.name)

    // If there is already a person in the database with same name, promt user with question whether the number of the person should be updated.
    if (existingPerson) {
      if (window.confirm(`${personObject.name} is already added to phonebook, replace the old number with the new one?`)) {
        personObject.id = existingPerson.id
        personService
          .update(existingPerson.id, personObject)
          .then(updatedPerson => {
            const updatedPersons = [...persons]
            let toUpdate = updatedPersons.find(p => p.id === updatedPerson.data.id)
            toUpdate.number = updatedPerson.data.number
            setPersons(updatedPersons)
            setNotificationMessage(`The number of ${existingPerson.name} changed to ${updatedPerson.data.number}`)
            setTimeout(() => (setNotificationMessage(null)), 4000)
          })
          .catch(error => {
            // Error handling updated according to part3 of the Fullstackopen-course, exercise 3.20.
            // If there is something in error.response.data, then display it, otherwise show a defeault error.
            if (!(Object.entries(error.response.data).length === 0 && error.response.data.constructor === Object)) {
              setErrorMessage(JSON.stringify(error.response.data))
            } else {
              setErrorMessage(`Failed to update the number of ${existingPerson.name}`)
            }
            setTimeout(() => setErrorMessage(null), 4000)
            setPersons(persons.filter(p => p.id !== personObject.id))
          })
      }

    } else {
      personService
        .create(personObject)
        .then(response => {
          personObject.id = response.data.id
          setPersons(persons.concat(personObject))
          setNotificationMessage(`Added ${personObject.name}`)
          setTimeout(() => (setNotificationMessage(null)), 4000)
        })
        .catch(error => {
          console.log(error.response.data)
          setErrorMessage(JSON.stringify(error.response.data))
          setTimeout(() => setErrorMessage(null), 4000)
        })
    }
  }

  const handleDelete = (person) => {
    if (window.confirm(`Are you sure you want to delete ${person.name}?`)) {
      personService
        .remove(person.id)
      setPersons(persons.filter(p => p.id !== person.id))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} />
      <Error message={errorMessage} />
      <SearchFilter
        searchString={searchString}
        setSearchString={setSearchString}
      />

      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />

      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} handleDelete={handleDelete} />
    </div>
  )
}

export default App