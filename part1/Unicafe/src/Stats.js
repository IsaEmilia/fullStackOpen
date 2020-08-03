import React from "react"

const Stats = (props) => {

    console.log(props)
  
    const good = props.good
    const bad = props.bad
    const neutral = props.neutral
    const sum = props.good + props.bad + props.neutral
    const average = (props.good + props.neutral + props.bad)/3
    const positive = (props.good / (props.good + props.neutral + props.bad)) * 100
  
    return (
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>All: {sum}</p>
        <p>Average: {average}</p>
        <p>Positive: {positive}</p> 
      </div>
    )
  }

  export default Stats