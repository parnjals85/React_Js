import "./App.css";
import React, { useState } from 'react'
import Form_handle from "./Form_handle";
// import Counter from "./counter";

// // function app(){
// //  const [num, setNum] = useState(0)

// //  function increasenum(){
// //   setNum(num+1)
// //  }

// //  function decreasenum(){
// //   setNum(num-1)
// //  }
// //  function jumpby5(){
// //   setNum(num + 5)
// //  }
// //  return(
// //   <>
// //   <h1>{num}</h1>
// //   <button onClick={increasenum}>+</button>
// //   <button onClick={decreasenum}>-</button>
// //   <button onClick={jumpby5}>jump5</button>
// //   </>
// //  )
// // }
// function app(){
//     // const [arr , setArr] = useState([10,20,30])
//     // const dest = () =>{
//     //     const newNum = [...arr]
//     //     newNum.push(100);
//     //     setArr(newNum)
//     }
//   return(
//     <>
//       {/* <h1>{arr}</h1>
//     <button onClick={dest}>Click</button> */}
//     </>
//   )

function app(){
    const [check , preCheck] = useState(0);
return(
    <>
     {/* <Counter /> */}
     <Form_handle />
    </>
)
}

export default app
