import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './component/header'
import Cardcontainer from './component/cardcontainer'

function App() {
  const [count, setCount] = useState(0)
  const name="rishav"
  const islogedin=false;
  return (
    <div>
      <Header/>
      <Cardcontainer/>
    </div>
  )
}

export default App
