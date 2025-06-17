import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter,Routes,Router,Route } from 'react-router-dom'
import AuthCheck from './AuthCheck'
import Auth from './Auth'
import Logg from './Logg'
import Home from './Home'
import Register from './Register'
import Error from './Error'
export default function MainLayout() {
  return (
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path="/" element={
        <AuthCheck>
            <Home/>

        </AuthCheck>
        
        }/>
      <Route path="auth" element={<Auth/>}>
      <Route path="login" element={<Logg/>}/>
      <Route path="register" element={<Register/>}/>
        </Route>
              <Route path="*" element={<Error/>}/>

    </Routes>
      </BrowserRouter>
  )
}

