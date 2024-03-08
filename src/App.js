import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import MainareaF from './components/MainareaF'
import MainareaI from './components/MainareaI'
import MainareaY from './components/MainareaY'
import { TypeAnimation } from 'react-type-animation';
import MainareaT from './components/MainareaT'
import MainareaTik from './components/MainareaTik'





export default function App() {
  return (
    <Router>
      
        <Navbar/>
        <Routes>
       
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/facebook" element={<MainareaF/>}/>
          <Route exact path="/instagram" element={<MainareaI/>}/>
          <Route exact path="/youtube" element={<MainareaY/>}/>
          <Route exact path="/twitter" element={<MainareaT/>}/>
          <Route exact path="/tiktok" element={<MainareaTik/>}/>
       
        </Routes>
        
<TypeAnimation
        sequence={[
          'No Need of login Details',
          1000,
          'No Bargains in rates (PLEASE)',
          1000,
          '100% Instant Service',
          1000,
          'Lifetime Permanent Followers',
          1000
        ]}
        wrapper="span"
        speed={50}
        style={{ position: "fixed",bottom: '0',left: '6px',fontSize: '1.5em', display: 'inline-block'}}
        repeat={Infinity}
      />
   
    </Router>
  )
}
