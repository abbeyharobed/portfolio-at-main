import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import cranessnew from "../assets/cranessnew.png";


function Cranessnew() {
  return (
   <>
     <Row className="px-4 my-5">
        <Col sm={7} bg="dark">
            <Image 
                className="w-100 boxshadow " 
                src={cranessnew}
                fluid 
                rounded
            />
        </Col>
        <Col sm={5}>
            <h1> Christmas Cakes </h1>
            <p>A flyer for a small baking bussiness, showcashing UI design skills</p>
            <Button variant="outline-light" href="https://canva.me/CkJZPEH0Yub"> Check it out </Button>
        </Col>
      </Row>

   </>
  );
}

export default Cranessnew;