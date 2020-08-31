import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [ persons, setPersons ] = useState([
    { content: 'Name Example', number: '123 456 789', id: 0 }
  ]) 
  const [ newName, setNewName ] = useState([''])
  const [ newNumber, setNewNumber] = useState([''])


  const NameList = () => {
    return(
      <div>
      <ul>
        {persons.map(name => 
          <li key={name.id} >
            {name.content} 
            <br></br> 
            {name.number}
          </li> 
        )} 
      </ul> 
      </div>
    )
  } 

  const addPerson = (event) => {
    event.preventDefault()
     const nameObject = {
       content: newName,
       number: newNumber,
       id: persons.length + 1,
    }

    if (newName === "r") {
      alert(`${newName} is already added to phonebook`)
      return(
        null
      ) 
    }else if(newNumber === ""){
      alert('Phone number is missing')
      return(
        null
      )
    } 
    
   if(newName === ""){
    return(
      null
    )}

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