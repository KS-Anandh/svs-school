import React, { useRef, useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Academics from './pages/Academics'
import PageNotFound from './pages/PageNotFound'
import AboutUs from './pages/AboutUs'
import Gallary from './pages/Gallary'
import Admissions from './pages/Admissions'
import Copyright from './components/Copyright'
function App() {
const aboutRef = useRef(null);
const contactUsRef = useRef(null);
  const [navigationLocation,setNavigationLocation]=useState(0);

  return (
    <div>
      <BrowserRouter>
      <Navigation aboutRef={aboutRef} contactUsRef={contactUsRef} navigationLocation={navigationLocation} setNavigationLocation={setNavigationLocation}/>
      <Routes>
        <Route path='/' element={<Home aboutRef={aboutRef} contactUsRef={contactUsRef}/>}/>
        <Route path='/academics' element={<Academics/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
         <Route path='/events' element={<Gallary/>}/>
          <Route path='/admisions' element={<Admissions/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
      <Copyright/>
      </BrowserRouter>
    </div>
  )
}

export default App