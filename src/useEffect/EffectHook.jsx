import React from 'react'
import { useState,useEffect } from 'react'

const EffectHook = () => {
  const [count,setCount] = useState(0)
    useEffect(()=>{
        console.log("The count is ",count)
    },[count])
  return (
    <div>
      <button onClick={()=>{
        setCount(count +1)
      }}>{`You clicked me ${count} times`}</button>

    </div>
  )
}

export default EffectHook
