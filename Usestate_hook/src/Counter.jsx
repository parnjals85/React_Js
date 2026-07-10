import React, { useState } from 'react'

function Counter() {
    const [count , setCount] = useState(0)
    function increase(){
        setCount(count+1)
    }
    function decrease(){
          setCount((prev)=>{
            if(prev ===0){
                alert("Sorry! We cant go below the 0")
                return prev;
            }
            return prev - 1;
          })
    }
  return (
    <div>
      <h1 className='P'>{count}</h1>
      <button onClick={increase} className='increment'>Add</button>
      <button onClick={decrease} className='decrement'>Subtract</button>
    </div>
  )
}

export default Counter
