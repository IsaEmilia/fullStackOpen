import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [ persons, setPersons ] = useState([
    { content: 'Arto Hellas', id: 0 }
  ]) 
  const [ newName, setNewName ] = useState([''])


  const addPerson = (event) => {
     event.preventDefault()
     const nameObject = {
       content: newName,
       id: persons.length + 1,
     }

     setPersons(persons.concat(nameObject))
     setNewName("")
  }
  
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addPerson}>
        name:  
        <input value={newName} 
               onChange={handleNameChange}/>
        <button type="submit">add</button>
      </form>
      
      <h2>Numbers</h2>
      
      <ul>
        {persons.map(name => 
          <li key={name.id} >{name.content}</li>
        )} 
      </ul>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)