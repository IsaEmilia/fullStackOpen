import React from "react"

const Content = (props) => {

   const Parts = () => {

       console.log(props)

       return (
           <div>
               <p>k {props.name} </p>
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