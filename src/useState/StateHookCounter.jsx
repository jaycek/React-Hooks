import React from 'react'
import { useState } from 'react'

const StateHookCounter= () => {
  const [count,setCount] = useState(0)

  return (
    <div>
      <button onClick={()=>{
        setCount(count +1)
      }}>{`You clicked me ${count} times`}</button>
    </div>
  )
}

export default StateHookCounter
