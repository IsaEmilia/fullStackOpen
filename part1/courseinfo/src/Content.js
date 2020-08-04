import React from "react"

const Content = ({parts}) => {

   const Parts = () => {

    return (
      <div>
        {parts.map(contents => 
        <li key={contents.id}>
          {contents.name}: {contents.exercises}</li>)}
      </div>
    )
   }

    return (
      <div>
        <Parts />
      </div>
    )

    
}

export default Content