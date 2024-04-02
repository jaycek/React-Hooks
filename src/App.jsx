import React from 'react'
import { useState } from 'react'
import StateHookCounter from './useState/StateHookCounter'
import EffectHook from './useEffect/EffectHook'

const App = () => {
  const {name,setName} =useState('Jayce')


  return (
    <div>
      {/* <input value={name} onChange={e=>setName(e.target.value)} />
      // <label htmlFor="name">{`Name entered is ${name}`} </label> */}

      {/* <StateHookCounter /> */}
      <EffectHook />
    </div>
  )
}

export default App
