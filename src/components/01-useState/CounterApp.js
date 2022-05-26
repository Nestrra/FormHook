

import React, { useState } from 'react'
import './counter.css'

export const CounterApp = () => {

     const [state, setstate] = useState({

        counter1: 20,
        counter2:10,
        counter3:30,
        counter:40

     })

     const {counter1, counter2} = state


  return (
    <>
        <h1>Counter {counter1} </h1>
        <h1>Counter {counter2} </h1>
        <hr/>



        <button
            onClick={
                ()=>setstate({
                    ...state,
                    counter1: counter1 + 1
                })
            }
        >
            +1
        </button>

    </>
  )
}
