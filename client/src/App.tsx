import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'

function App() {
  const renderLogo:()=>JSX.Element = () => {
    return <div className='site-logo'>Sell Stuff</div>
  }

  return (
    <div className="page-container">
        <Navbar logo={renderLogo()} />
        <Sidebar logo={renderLogo()} />
        <div className="content-container">
        <Routes>
          <Route path='/sell-stuff' element={<Home title="Home" />} />
        </Routes>
        </div>
    </div>
  )
}

export default App;