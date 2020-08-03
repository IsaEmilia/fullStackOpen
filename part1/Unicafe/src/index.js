import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Stats from "./Stats"


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )

  return (
    <div>
      <h1>Give feedback </h1>
      <Button handleClick={() => setGood(good +1) } text="Good"/>
      <Button handleClick={() => setNeutral(neutral +1)} text="Neutral"/>
      <Button handleClick={() => setBad(bad +1)} text="Bad"/>
      <hr></hr>
      <h1>Stats</h1>
      <Stats  />
      {/* <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p> 
      <p>All: {good + neutral + bad}</p>
      <p>Average: {(good + neutral + bad)/3}</p>
      <p>Positive: {(good / (good + neutral + bad)) * 100}%</p>  */}
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)