import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Row, Col } from 'react-bootstrap';

function NewsLetter() {
  return (
      <span >
          <Row>
              <Col xl={3} md={3} >
              </Col>

              <Col xl={6} md={6} >
                  <div className="newsletter">
                  <Form id= "form" >
                    <h4 className = "text-white">Hear from me  </h4>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                 </Form.Group>

                    <Button variant="light" type="submit">
                        Subscribe!
                    </Button>
                     </Form>
                  </div>
              
              </Col>
              <Col xl={3} md={3} >
              </Col>
          </Row>
        
      </span>
    
  );
}

export default NewsLetter;