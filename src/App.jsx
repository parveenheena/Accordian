import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function Accordion({title, children}){
const [open, setOpen] = useState(false);

function handleAccordion(){
  setOpen(!open)
}

return (
  <div className='accordion'>
    <div className='heading' onClick={handleAccordion}>
      <h2>{title}</h2>
      <span className='icon'>{open ? '\u25B2' : '\u25BC'}</span>
    </div>
    {open && <div className='children'>{children}</div>}
  </div>
)
}

function App() {

  return (
    <div className='Container'>
     <h1>Accordion</h1> 
      <Accordion title="accordion1">
      <p>this is an accordion</p>
      </Accordion>
      <Accordion title="accordion2">
      <p>this is an accordion</p>
      </Accordion>
    </div>
  )
}

export default App
