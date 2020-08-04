import React from "react"

const Header = ({courses}) => {

    console.log("Header", courses)

    return (
        <div>
            <h1>{courses.name}</h1>
            <hr></hr>
        </div>
    )
}

export default Header