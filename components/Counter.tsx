'use client'
import React, { useState } from 'react'
type Shape = {
    val:string
}

const Counter = () => {
    const [count,setCount]= useState<number>(0);

    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
  return (
    <div>Counter</div>
  )
}

export default Counter