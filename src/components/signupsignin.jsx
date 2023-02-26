import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import writing7 from "../assets/writing7.jpg";


function Signupsignin() {
  return (
   <>
     <Row className="px-4 my-5">
        <Col sm={7} bg="dark">
            <Image 
                className="w-100 boxshadow " 
                src={writing7}
                fluid 
                rounded
            />
        </Col>
        <Col sm={5}>
            <h1> Registeration & Log In form</h1>
            <p>A registeration and log in template built with simple html, css and Javascript and confimation pages</p>
            <Button variant="outline-light" href="https://abbeyharobed.github.io/sign-up-sign-in/"> Check it out </Button>
        </Col>
      </Row>

   </>
  );
}

export default Signupsignin;