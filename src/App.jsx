import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './images/moon.ico'
import example from './images/right.png'
import examplephone from './images/see.png'
import arrow from './images/arrow.svg'
function App() {
  return (
    <>
      
  <nav className='navbar'> </nav>
  <a href='/' className='login'>Login</a>
  <a href='/' className='register'>Register</a>
  <a href='/' className='discord'>Discord</a>
  
  <h1 className='header'> shdw.site, linking you to the world, one click at a time! </h1>
  <p className='p1'>Say goodbye to scattered social media 
    links and hello to streamlined accessibility. 
    Our platform empowers you to centralize your online
     presence effortlessly.</p>
  
<a href='/' className='learnmore'> Get Started </a>



  <a href='/'>
<img src={logo} alt=""  className='logo'/>
  </a>

<a  href=''> 
<h1 className='logo-text'> shdw site</h1>
</a>
<h1 className='logo-dot'>. </h1>
    

<img src={example} alt='' className='example' />
<img src={examplephone} alt='' className='example1' />
    

<img src={arrow} alt='' className='arrow' />


    </>
  )
}

export default App
