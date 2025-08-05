import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProperty from './pages/AddProperty'
import PropertyDetail from './pages/PropertyDetail'
import PropertyList from './pages/PropertyList'

const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path="/" element={<PropertyList/>} />
        <Route path="/add" element={<AddProperty/>} />
        <Route path="/property/:id" element={<PropertyDetail/>} />
      </Routes>
    </div>
  )
}

export default App