import { useState } from 'react'
import Student_data from './Student_data'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
  <Student_data />
   </>
  )
}

export default App
