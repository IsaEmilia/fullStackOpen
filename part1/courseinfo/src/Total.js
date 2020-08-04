 import React from "react"

 const Total = ({parts}) => {


   return (
       <div>
         <h4>Total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises </h4>

           <hr></hr>
       </div>
   )
 }

 export default Total