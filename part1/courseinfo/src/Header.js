import React from "react"

const Header = ({course}) => {

    console.log("Header", course.name)

    return (
        <div>
            <h3>{course.name}</h3>
        </div>
    )
}

export default Header