import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import SignIn from './components/signIn'

function App() {
  return (
    <div className='App'>

      <Router>
        <Routes>
          <Route path='/' element={<SignIn />} />

        </Routes>
      </Router>

    </div>
  )
}

export default App

