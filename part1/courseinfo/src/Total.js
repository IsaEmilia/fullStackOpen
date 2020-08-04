 import React from "react"

 const Total = ({courses}) => {

  console.log("Total", courses)

   return (
       <div>
         <li>Number of exercises: {courses.reduce((sum, part) => sum + part.exercises, 0)} </li>

           <hr></hr>
       </div>
   )
 }

 export default Total