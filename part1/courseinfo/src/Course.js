import React from "react"
import Content from "./Content"
import Header from "./Header"
import Total from "./Total"

const Course = ({courses}) => {

    console.log("Course", courses)

    return( 
        <div>
            <Header courses={courses}/>
            <Content courses={courses}/>
            <Total courses={courses}/>
        </div>
    )
}

export default Course