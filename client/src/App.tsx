import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from './components/Navbar'

function App() {
  const renderLogo = () => {
    return <div className='site-logo'>Sell Stuff</div>
  }

  return (
    <div className="page-container">
      <Navbar logo={renderLogo()} />
      <div className="sidebar-container bg-danger">
        {renderLogo()}
      </div>
      Sell-Stuff
    </div>
  )
}

export default App;
