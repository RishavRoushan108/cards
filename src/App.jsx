import './App.css'
import Header from './component/header'
import Cardcontainer from './component/cardcontainer'
import { useState } from 'react'

function App() {
  const [totalcount,settotalCount]=useState(0);
  const [totalprice,settotalprice]=useState(0);
  return (
    <div>
      <Header totalcount={totalcount} totalprice={totalprice}/>
      <Cardcontainer settotalCount={settotalCount} settotalprice={settotalprice}/>
    </div>
  )
}

export default App
