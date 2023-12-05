import { useState } from 'react'
import './App.css'

export default function App() {

  const [like, setLike] = useState(0)
  
  function updateLike(id) {
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
        <span id="title">Goalkeepers, {like}<span> <button id="btn" onClick={updateLike}>👍</button></span></span>
        <li>1. Allison</li><br />
        <li>2. Ter Stegen</li>
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

