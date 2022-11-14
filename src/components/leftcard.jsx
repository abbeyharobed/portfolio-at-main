
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';


function LeftCard() {
  return (
   <>
     <Row className="px-4 my-5">
        <Col sm={7} bg="dark">
            <Image 
                className="w-100 boxshadow "
                src="https://random.imagecdn.app/500/150"
                fluid 
                rounded
            />
        </Col>
        <Col sm={5}>
            <h1>Welcome!</h1>
            <p> This is dummy lorem ipsum txt content</p>
            <Button variant="outline-light"> Subscribe </Button>
        </Col>
      </Row>

   </>
  );
}

export default LeftCard;