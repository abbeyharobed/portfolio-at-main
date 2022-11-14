import { Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
//import image from "../assets/image.png";
//import bitmoji1removebg from "../assets/bitmoji1removebg.png";
import bitmoji2removebg from "../assets/bitmoji2removebg.png";
// import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
// import About from '../pages/about';


function Banner() { 
  return (
    // <Router>
      <div  className="banner">
          <>
          <Row>
              <Col xl={8} sm={8} >
                <h1> Hello, I'm Harobed </h1>
                <h2>I write code, articles, poetry </h2>
                <h2>and manage products and projects  </h2>
              </Col>
              <Col xl={4}sm={4}>
              <Image 
                // as={Link} to={'/about'}
                className="boxshadow bannerpic"
                src={bitmoji2removebg}
                fluid 
                rounded
            />
              </Col>
          </Row>
       
      </>

      {/* <div>
      <Routes>
        <Route path="/about" element={<About/>} />
      </Routes>
    </div> */}
      </div>

      // </Router>
      
    
  );
}

export default Banner;