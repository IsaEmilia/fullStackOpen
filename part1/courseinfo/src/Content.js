import React from "react"

const Content = ({courses}) => {

  console.log("Content", courses[0].parts)

   const Parts = () => {

    return (
      <div>
        {courses.map(contents => 
        <li key={contents.id}>
          {contents.name}:{contents.exercises}</li>)}
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