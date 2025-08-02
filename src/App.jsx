import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar';
import Newsboard from './components/Newsboard';

const App = () => {
  const [category ,setCategory] = useState("general")
  return (
    <>
      
      <Navbar setCategory={setCategory}/>
      <Newsboard category={category}/>
    </>
  )
}

export default App
