import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import calc3 from "../assets/calc3.jpg";


function Calculator() {
  return (
   <>
     <Row className="px-4 my-5">
        <Col sm={7} bg="dark">
            <Image 
                className="w-100 boxshadow " 
                src={calc3}
                fluid 
                rounded
            />
        </Col>
        <Col sm={5}>
            <h1> Calculator</h1>
            <p>A calculator application built with HTML, CSS and JavaScript</p>
            <Button variant="outline-light" href="https://abbeyharobed.github.io/calculator/"> Check it out </Button>
        </Col>
      </Row>

   </>
  );
}

export default Calculator;