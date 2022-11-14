import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Home from '../pages/home';
import Projects from '../pages/projects';
import NewsLetter from './newsletter';

function Navbarr() { 
  return (
    <Router>
    <Navbar collapseOnSelect expand="lg" variant="dark" className="nav">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Blogs" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://walflowerlogic.wordpress.com/">Wallflower Logic</NavDropdown.Item>
              <NavDropdown.Item href="https://thealmosttechsis.tech.blog/" >Almost Tech Sis</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={'/home'}>
                Subscribe to News Letter
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link eventKey={2} href="https://www.canva.com/design/DAFK-gnIB4o/OIWgGteVMYeCiC6pAyEBCQ/edit?utm_content=DAFK-gnIB4o&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
              Resume
            </Nav.Link>
          </Nav>
          </Navbar.Collapse>
          <Navbar.Brand  as={Link} to={'/home'} className="text-center" id="logotext">Harobed's</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
          <Nav>
          <Nav.Link as={Link} to={'/projects'}> Code Projects</Nav.Link>
          <Nav.Link href = "mailto: abbeyharobed@gmail.com"> Contact me </Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/newsletter" element={<NewsLetter/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default Navbarr;