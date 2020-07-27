import React from "react"

const Total = (props) => {

  return (
      <div>
          <p>number of exercises: {(props.part1.exercises) + (props.part2.exercises) + (props.part3.exercises)}</p>
          
          <hr></hr>
      </div>
  )
}

export default Total