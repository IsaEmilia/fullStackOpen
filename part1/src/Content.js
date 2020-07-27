import React from "react"

const Content = (props) => {

   const Parts = () => {

    console.log(props)
    
    return (
      <div>
        <p> {props.parts[0].name}</p>
        <p> {props.parts[1].name}</p>
        <p> {props.parts[2].name}</p>
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