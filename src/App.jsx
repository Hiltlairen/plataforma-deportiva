import { useState } from 'react'
import './App.css'

//PAGEs
import Inicio from './pages/Inicio';

//COMPONENTS
import Header from './components/Header/Header';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
      <Inicio />
    </>
  )
}

export default App
