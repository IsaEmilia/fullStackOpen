 import React from "react"

 const Total = ({parts}) => {

  console.log("Total", parts)

   return (
       <div>
         <li>Total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises </li>

           <hr></hr>
       </div>
   )
 }

 export default Total