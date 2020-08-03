import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Stats = (props) => {


  const good = props.good
  const bad = props.bad
  const neutral = props.neutral
  const sum = props.good + props.bad + props.neutral
  const average = "fuck average"
  const positive = (props.good / (props.good + props.neutral + props.bad)) * 100

  if(!good && !neutral && !bad){
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {sum}</p>
      <p>Positive: {positive}</p> 
      <p>Average: {average}</p>
    </div>
  )
}


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
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)