import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import cranessold2 from "../assets/cranessold2.png";


function Cranessold() {
  return (
   <>
     <Row className="px-4 my-5">
        <Col sm={5}>
            <h1> Christmas Cakes </h1>
            <p>A flyer for a small baking bussiness showcashing UI design skills</p>
            <Button variant="outline-light" href="https://www.canva.com/design/DAEwLxD_zgY/2fi_q7aQic21JzE11oFYew/view?utm_content=DAEwLxD_zgY&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu"> Check it out </Button>
            <br/>
        </Col>
        <Col sm={7} bg="dark">
            <Image 
                className="w-100  boxshadow"
                src={cranessold2}
                fluid 
                rounded
            />
        </Col>
      </Row>

   </>
  );
}

export default Cranessold;
