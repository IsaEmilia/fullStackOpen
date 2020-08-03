 import React from "react"

 const Total = ({course}) => {


  console.log(course.parts.length)

//  const sum = course.map(sumList => <p key={sumList.id}>{sumList.exercise}</p>)
 

   return (
       <div>
         <li>Number of exercises: {course.parts.length}</li>

           <hr></hr>
       </div>
   )
 }

 export default Total