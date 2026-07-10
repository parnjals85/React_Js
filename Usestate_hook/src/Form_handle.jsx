import React from 'react'

const Form_handle = ()=>{
    function formcheck(e){
       e.preventDefault();
       console.log("form Submit")
    }
    return(
        <form onSubmit={Form_handle}>
            <input type='text' placeholder='Enter your name here'></input>
            <button>Submit</button>
        </form>
    )
}

export default Form_handle
