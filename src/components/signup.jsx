import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import writing6 from "../assets/writing6.jpg";


function Signup() {
  return (
   <>
     <Row className="px-4 my-5">
        <Col sm={7} bg="dark">
            <Image 
                className="w-100 boxshadow heightwidth"
                src={writing6}
                fluid 
                rounded
            />
        </Col>
        <Col sm={5}>
            <h1> Sign Up Form </h1>
            <p>A Sign up form template using HTML, CSS and vanilla JS with validation </p>
            <Button variant="outline-light" href="https://sign-up-form-production.up.railway.app/"> Check it out </Button>
        </Col>
      </Row>

   </>
  );
}

export default Signup;