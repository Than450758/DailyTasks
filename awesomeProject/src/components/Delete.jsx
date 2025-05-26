import React from 'react'

const Delete = ({setCount, count,del}) => {
  return (
    <div>
        <button onClick= {del} >Delete</button>
    </div>
  )
}

export default Delete