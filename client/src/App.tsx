import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'

function App() {
  const renderLogo:()=>JSX.Element = () => {
    return <div className='site-logo'>Sell Stuff</div>
  }

  return (
    <div className="page-container">
      <Navbar logo={renderLogo()} />
      <Sidebar logo={renderLogo()} />
      <div className="content-container">
        Content
      </div>
    </div>
  )
}

export default App;
