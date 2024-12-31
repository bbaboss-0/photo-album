import { useState } from 'react'
import './App.css' 
// import '../style/global.css';
import AppNavigation from './component/AppNavigation'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AppNavigation />
       
    </>
  )
}

export default App
