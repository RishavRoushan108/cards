import './App.css'
import Header from './component/header'
import Cardcontainer from './component/cardcontainer'
import { useState } from 'react'

function App() {
  const [totalcount,settotalCount]=useState(0);
  return (
    <div>
      <Header totalcount={totalcount}/>
      <Cardcontainer settotalCount={settotalCount}/>
    </div>
  )
}

export default App
