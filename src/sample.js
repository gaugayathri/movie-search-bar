import React from 'react'

function Sample({value,set}) {
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={set}>clicked</button>
    </div>
  )
}

export default Sample
