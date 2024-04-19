import React from 'react'
// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import SignIn from './components/signIn'
import Login from "./components/Login";
import Dashboard from './components/dashboard'
import UserManagement from './components/userManagement'
import AddUser from './components/addUser'
import BookManagement from './components/bookManagement'
import AddBook from './components/addbook'
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
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/usermanagement' element={<UserManagement />} />
          <Route path='/adduser' element={<AddUser />} />
          <Route path='/bookmanagement' element={<BookManagement />} />
          <Route path='/addbook' element={<AddBook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App

