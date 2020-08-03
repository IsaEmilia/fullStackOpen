import React from "react"

const Content = ({course}) => {

   const Parts = () => {

    return (
      <div>
        {course.parts.map(contents => <li key={contents.id}>{contents.name}: {contents.exercises}</li>)}
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