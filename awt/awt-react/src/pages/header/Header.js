import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import "./Header.css";
export const Header = () => {
  const token =localStorage.getItem("token");
  const navigate =useNavigate();

  const handleLogout = ()=>{
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
   <>
         <Navbar bg={token ? "primary":"dark"} variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="
          ">
            {token ? "Logged-In":"Not-LoggedIn"}
          </Navbar.Brand>
          <Nav className="ml-auto">
            {token ? (
              <>
              <Nav.Link as={Link} to="/dashboard" className='nav-link'>
              Dashboard</Nav.Link>
              <Nav.Link  className='nav-link' onClick={handleLogout}>
              Logout</Nav.Link>
              </>
            ) :(
              <>
              <Nav.Link as={Link} path="/login" className="nav-link">Login</Nav.Link>
            <Nav.Link as={Link} path="/signup" className="nav-link">Signup</Nav.Link>
              </>
            )}
         
            
          </Nav>
        </Container>
      </Navbar>
   </>
  )
}
