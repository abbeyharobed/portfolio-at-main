import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import game3 from "../assets/game3.jpg";


function Dinogame() {
  return (
   <>
     <Row className="px-4 my-5">
        <Col sm={5}>
            <h1>Dinogame</h1>
            <p> A more challenging replica attempt of the chrome dino game with simple shapes </p>
            <Button variant="outline-light" href="https://abbeyharobed.github.io/dino-game/"> Check it out </Button>
            <br/>
        </Col>
        <Col sm={7} bg="dark">
            <Image 
                className="w-100  boxshadow"
                src={game3}
                fluid 
                rounded
            />
        </Col>
      </Row>

   </>
  );
}

export default Dinogame;