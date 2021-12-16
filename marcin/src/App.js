import React from 'react'
import {BrowserRouter as Router,NavLink,Routes,Route} from 'react-router-dom'
import  { Button,Navbar,Container,Brand,Nav,Link,Collapse,Toggle,Item,NavDropdown,Form,FormControl }  from  'react-bootstrap' ;
import logo from "./img/logo.png"
import Zawartosc from './components/Zawartosc';
import StronaGłowna from './components/StronaGłowna';
import './style/style.css'

function App() {
    return (
     <Router>

    
<>
<Container fluid>
<Navbar bg="dark" variant="dark" className="container-fluid" fixed="top">
<Container>
<Navbar.Brand href="/">MaRcinGaMeS</Navbar.Brand>
<Nav className="me-auto">
  <Nav.Link href="/main">Strona Główna</Nav.Link>
  <Nav.Link href="/instrukcja">Instrukcja</Nav.Link>
  <Nav.Link href="/o-grze">Test</Nav.Link>
</Nav>
</Container>
</Navbar>
</Container>
<div className="container-fluid glowny" >
  <br /> 
<main>
    <Zawartosc/>
    </main> 
    </div>
</>


     </Router>
    )
}

export default App
