import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaInstagram, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
//import NewsLetter from './newsletter';

function Footer() {
    return (
   
         <footer className="py-5 my-5 bg-dark footerheight" >
            <Row>
               <Col sm={5}>
                  <h1 className="footerlogo">Harobed's</h1>
               </Col>
               <Col sm={5}>

               </Col>
               <Col sm={2} > 
               <h4 className="text-white">Let's connect</h4>
               <FaGoogle className="text-white icons"/>
               <FaGithub className="text-white icons"/>
               <FaInstagram className="text-white icons"/>
               <FaTwitter className="text-white icons"/>
             
               </Col>
            </Row>

            <Row>
            <p className="text-center text-white"> Copyright &copy; Harobed 2022</p>
            </Row>
            
         </footer>
    
    );
  }
  
  export default Footer;