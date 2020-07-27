import React, {useState} from "react"

const Total = (props) => {

  const sum = (props.parts[0].exercises)+(props.parts[1].exercises)+(props.parts[2].exercises)


  const [ counter, setCounter ] = useState(sum)


  const increase = () => setCounter(counter + 1)
  const decrease = () => setCounter(counter - 1)
  const reset = () => setCounter(sum)

  const randomize = () => {
    const maxNumber = 100;
    const randomNumber = setCounter(Math.floor((Math.random() * maxNumber) + 1));
  }
  

  return (
      <div>
        <p>Number of exercises: {counter}</p>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={randomize}>?</button>
        <button onClick={reset}>reset</button>
          <hr></hr>
      </div>
  )
}

export default Total