import React from 'react'
import Signin from './Signin'
import Home from './Home'
import SignUp from './SignUp'
import Driver from './Driver'
import { Route, Routes } from 'react-router-dom'
// import Navbar from './Navbar'

function App() {
  return (
    <Routes>
      {/* <Route path='/' element={<Navbar />} > */}
        <Route index element={<Home />} />
        <Route path='/login' element={<Signin />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/driver' element={<Driver />} />
        <Route path='*' element={<h1>dsafasdf</h1>} />
      {/* </Route> */}
    </Routes>
  )
}

export default App
