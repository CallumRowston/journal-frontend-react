import React from "react"
import { Link } from "react-router-dom"

// Receiving props object and destructuring to have 1 variable: entries 
// which will have the value passed in App, which will be the value of State
const Home = ({ entries }) => {
  return (
    // use {} to indicate whats inside the h2 is JS

    // Maps a new array where each item (entry) is a block of JSX
    // where key = index
    // key for list items means react can re-render single items without re-rendering the entire list 
    // Link component takes us to the route for displaying that individual entry
    <>
      <h2>Journal Entries</h2>
      {entries.map((entry, index) => (
        <p key={index}>
          <Link to={`entry/${index}`}>{entry.content}</Link>
        </p>
      ))}
    </>
  )
}

export default Home