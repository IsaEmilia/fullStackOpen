import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Name Example', number: '123 456 789', id: 0 }
  ]) 
  const [ newName, setNewName ] = useState([''])
  const [ newNumber, setNewNumber] = useState([''])


  const NewPerson = () => {
    return(
      <form onSubmit={addPerson}>
        name:  <br></br>
        <input value={newName} 
               onChange={handleNameChange}/>
        <br></br>
        number:  <br></br>
        <input value={newNumber} 
               onChange={handleNumberChange}/>
        <br></br>
        <button type="submit">add</button>
      </form>
    )
  }

  const NameList = () => {
    const listOfNames = persons.map(name => 
      <li key={name.id} >
        {name.name} 
        <br></br> 
        {name.number}
      </li> 
    ) 
    const nameArray = Object.values(listOfNames)
    console.log(nameArray)

    return(
      <div>
      <ul>
        {nameArray}
      </ul> 
      </div>
    )
  } 


  const addPerson = (event) => {

    event.preventDefault()

    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    setPersons(persons.concat(nameObject))
    setNewName("")
    setNewNumber("")
  }
  
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }


  return (
   <div>
      <h2>Phonebook</h2>
      <NewPerson />    
      <h2>Numbers</h2>

     <div>
       <NameList />
     </div>
      
    </div> 
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)