import { useState } from 'react'
import { Navbar } from './assets/Components/navbar/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
    </>
  )
}

export default App
