import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import nurse3 from "../assets/nurse3.png";


function Schomed() {
  return (
   <>
     <Row className="px-4 my-5">
        <Col sm={5}>
            <h1>Schomed</h1>
            <p> A UI design for a school - health app using UI design principles and Figma </p>
            <Button variant="outline-light" href="https://www.figma.com/file/gQ1dUjiZwFcarhBvEZyUXY/Debbie's-Scomed-App?node-id=0%3A1"> Check it out </Button>
            <br/>
        </Col>
        <Col sm={7} bg="dark">
            <Image 
                className="w-100  boxshadow"
                src={nurse3}
                fluid 
                rounded
            />
        </Col>
      </Row>

   </>
  );
}

export default Schomed;