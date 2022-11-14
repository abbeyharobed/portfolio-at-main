import Container from 'react-bootstrap/Container';
import LeftCard from "../components/leftcard";
import RightCard from "../components/rightcard";
import Carousell from '../components/carousel';

function Home() {
  return (
    <Container>
        <Carousell></Carousell> 
        <LeftCard></LeftCard>
        <RightCard></RightCard>
        <LeftCard></LeftCard>
        <RightCard></RightCard>
    <Container/>
  );
}


<Navbar.Toggle /> 
        <Navbar.Collapse className="justify-content-end">
        
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>

        <Nav className="me-auto">
        <Nav.Link href="#link" className="justify-content-end">Code</Nav.Link>
        </Nav>

        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="#home">Writing</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

export default Home;

import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbarr() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Writing</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Brand href="#home" className="text-center text-white">Harobed's</Navbar.Brand>

      
        </Navbar>
      </Container>
  );
}

export default Navbarr;

<Nav.Link href="#features">Features</Nav.Link>
<Nav.Link href="#pricing">Pricing</Nav.Link>
<Nav.Link href="#deets">More deets</Nav.Link>




 /*<Carousel.Item style ={{height: 500, backgroundimage:"Nebula1.jpg"}} className="d-block" alt="First slide">
        
        <Carousel.Caption>
          <Row>
            <Col sm={7}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Col>
          </Row>
        </Carousel.Caption>
      </Carousel.Item>*/




      import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container, Row, Col } from 'react-bootstrap';

<Carousel.Caption style ={{display: float}}></Carousel.Caption>

function Banner (){
    return {
        <Con className="banner">
            <Row>
                <Col>
                    <h1 xs={12} md={6} xl={8}>
                        Welcome to my space, hope you find what you're looking for
                    </h1>
                </Col>
                <Col md={6} xl={4}>
                
                </Col>
            </Row>
        </Container>

    }
}

export default Banner;

<Form.Label className = "text-white">Email address</Form.Label>




<div className="item" >
<img src={meter10} alt="image"/>
<h5>Web Development </h5>
</div>
<div className="item" >
<img src={meter10} alt="image"/>
<h5>Web Development </h5>
</div>
<div className="item" >
<img src={meter10} alt="image"/>
<h5>Web Development </h5>
</div>
<div className="item" >
<img src={meter10} alt="image"/>
<h5>Web Development </h5>
</div>


<h1> Hi, welcome to my space.</h1>
                <h3>I write code, articles, poetry and manage projects  </h3>


                <h1> Hi, welcome to my space,where imagination comes to life and irony resides.</h1>
                <h3> Hope you find what you're looking for </h3>
                <h3>I write code, articles, poetry </h3>
                <h3>and manage products and projects  </h3>



                <Route path="/projects" element={<Projects/>}/>

                <NavDropdown title="Code" id="collasible-nav-dropdown">
                <NavDropdown.Item href="https://github.com/abbeyharobed">GitHub</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Hosted</NavDropdown.Item>
              </NavDropdown>

              <Routes>
              <Route path="/" element={<Home/>}/>
            
            </Routes>
      
            

            // mailchimp

            <form action="https://gmail.us18.list-manage.com/subscribe/post" method="POST">
    <input type="hidden" name="u" value="7ba2d1ab98ce8312af2908e99">
    <input type="hidden" name="id" value="8b33f7273f">
    

    <!-- people should not fill these in and expect good things -->
    <div class="field-shift" aria-label="Please leave the following three fields empty" aria-hidden="true">
        <label for="b_name">Name: </label>
        <input type="text" name="b_name" tabindex="-1" value="" placeholder="Freddie" id="b_name">

        <label for="b_email">Email: </label>
        <input type="email" name="b_email" tabindex="-1" value="" placeholder="youremail@gmail.com" id="b_email">

        <label for="b_comment">Comment: </label>
        <textarea name="b_comment" tabindex="-1" placeholder="Please comment" id="b_comment"></textarea>
    </div>

    <div id="mergeTable" class="mergeTable">
        
        
        <div class="mergeRow dojoDndItem mergeRow-email" id="mergeRow-0">
            <label for="MERGE0">Email Address <span class="req asterisk">*</span></label>
            <div class="field-group">
                <input type="email" autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" size="25" value="">
                
                
            </div>
            
        </div>
        
        
        
        <div class="mergeRow dojoDndItem mergeRow-text" id="mergeRow-1">
            <label for="MERGE1">First Name</label>
            <div class="field-group">
                <input type="text" name="MERGE1" id="MERGE1" size="25" value="">
                
                
            </div>
            
        </div>
        
        
        
        <div class="mergeRow dojoDndItem mergeRow-text" id="mergeRow-2">
            <label for="MERGE2">Last Name</label>
            <div class="field-group">
                <input type="text" name="MERGE2" id="MERGE2" size="25" value="">
                
                
            </div>
            
        </div>
        
        
        
        
        
        
        
        <div class="mergeRow dojoDndItem mergeRow-birthday" id="mergeRow-5">
            <label for="MERGE5">Birthday</label>
            <div class="field-group">
                <div class="birthdayfield subfields borderbox"><span class="subfield monthfield"><label for="MERGE5-month">Month</label><input type="text" pattern="[0-9]*" id="MERGE5-month" name="MERGE5[month]" maxlength="2" size="2" value="" placeholder="MM"></span> / <span class="subfield dayfield"><label for="MERGE5-day">Day</label><input type="text" pattern="[0-9]*" id="MERGE5-day" name="MERGE5[day]" maxlength="2" size="2" value="" placeholder="DD"></span></div>
                
                
            </div>
            
        </div>
        
        


        

        

        
    </div>

    <div class="submit_container clear">
        <input type="submit" class="formEmailButton" name="submit" value="Subscribe">
    </div>
    <input type="hidden" name="ht" value="03a66a90db54cbdd757c9bc652e6d2f8e52d4f20:MTY2NDE5NTczNi40NTYy">
    <input type="hidden" name="mc_signupsource" value="hosted">
</form>


//import LeftCard from "../components/leftcard";
//import RightCard from "../components/rightcard";
//import Carousell from '../components/carousel';
import Banner from "../components/banner";
import Newsletter from "../components/newsletter";
import Skills from "../components/skills";

function  Home() {
    return (
     < >
        <Banner></Banner>
        <Skills></Skills>
        <Newsletter></Newsletter> 
     </>
    );
  }
  
  export default Home;