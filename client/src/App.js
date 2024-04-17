import React from 'react'
// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import SignIn from './components/signIn'
import Login from "./components/Login";
import { useState } from "react";


function App() {
  // return (
  //   <div className='App'>

  //     <Router>
  //       <Routes>
  //       <Route
  //           path="/login"
  //           element={<Login setUserState={setUserState} />}
  //         ></Route>
  //         <Route path="/signup" element={<SignIn />}></Route>
  //         {/* <Route path='/' element={<SignIn />} /> */}

  //       </Routes>
  //     </Router>

  //   </div>
  // )
  
  const [userstate, setUserState] = useState({});
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route
            path="/"
            element={
              userstate && userstate._id ? (
                <Profile
                  setUserState={setUserState}
                  username={userstate.fname}
                />
              ) : (
                <Login setUserState={setUserState} />
              )
            }
          ></Route> */}
          <Route
            path="/"
            element={<Login setUserState={setUserState} />}
          ></Route>
          <Route path="/signup" element={<SignIn />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App

