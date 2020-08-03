import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {

  return(
    <div>
      <p>{props.text}{props.value}</p>
    </div>
  )
}

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
        <p>No feedback given :(</p>
      </div>
    )
  }

  return (
    <div>
      <Statistic text="Good: " value={good}/>
      <Statistic text="Neutral: " value={neutral}/>
      <Statistic text="Bad: " value={bad}/>
      <Statistic text="All: " value={sum}/>
      <Statistic text="Positive: " value={positive}/>
      <Statistic text="Average: " value={average}/>
    </div>
  )
}

const App = (props) => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(0)

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
      <hr></hr>
      <p>{props.anecdotes[selected]}</p>
      <Button handleClick={() => setSelected(Math.floor(Math.random() * 6))} text="Next anecdote"/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />, 
  document.getElementById('root')
)