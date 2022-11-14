import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Button from 'react-bootstrap/Button';

function Carousell() {
  return (
    <Carousel fade>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          style ={{height: 500}}
          src="Nebula1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <Row>
            <Col sm={4}>
            <h1 style ={{fontsize: 150}}>Hi, I'm Debbie. <br/> I write Code</h1>
            </Col>
          </Row>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style ={{height: 500}}
          src="Nebula1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style ={{height: 500}}
          src="Nebula1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousell;