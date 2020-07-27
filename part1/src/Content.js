import React from "react"

const Content = (props) => {

   const Parts = () => {

    return (
      <div>
        <p> {props.part1.name} </p>
        <p> {props.part2.name} </p>
        <p> {props.part3.name} </p>
      </div>
    )
   }

    return (
      <div>
        <Parts />
        <hr></hr>
      </div>
    )

    
}

export default Content