import { useState } from 'react'
import './App.css'

export default function App() {

  const [like, setLike] = useState(0)
  
  function updateLike() {
    setLike(like === 1 ? 0 : 1)
  }

  return (
    <>
      <div>

      </div>
      <h1>Top Footballers!</h1>

      <p className="read-the-docs">
        Top 3 best footballers in each position
      </p>

      <ul>
        <h2>Goalkeepers</h2>
        <li>1. Allison</li>Like: {like} <button onClick={updateLike}>👍</button><br />
        <li>2. Ter Stegen</li>Like: {like} <button onClick={updateLike}>👍</button>
      </ul>
      <ul>
        <h2>Defenders</h2>
        <li></li>
      </ul>
      <ul>
        <h2>Midfielders</h2>
        <li></li>
      </ul>
      <ul>
        <h2>Attackers</h2>
        
        <li></li>
      </ul>
    </>
  )
}
