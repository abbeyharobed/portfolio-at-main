import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Row, Col,} from 'react-bootstrap';
import meter70 from "../assets/meter70.png";
import meter60 from "../assets/meter60.png";
import meter80 from "../assets/meter80.png";

function Skills() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 800 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 800, min: 0 },
          items: 1
        }
      };

    return (
        <div  className="skills">
            <Row>
                <Col>
                <div className="skillbox">
                  <h1> Skills </h1>
                  <h3>Here are some of the things I can do and how well I can do them </h3>

                  <Carousel responsive={responsive} infinite={true} className="slider">
                      <div className="item" >
                      <img src={meter70} alt="something"/>
                          <h5>Web Development </h5>
                          <p>HTML, CSS, React js</p>
                      </div>
                      <div className="item" >
                      <img src={meter60} alt="something"/>
                          <h5>Product / Project Mangagement </h5>
                          <p>ClickUp, Trello</p>
                      </div>
                      <div className="item" >
                      <img src={meter60} alt="something"/>
                          <h5> UI/UX Design </h5>
                          <p>Figma, Canva</p>
                      </div>
                      <div className="item" >
                      <img src={meter80} alt="something"/>
                          <h5>Google Suite </h5>
                          <p>Gmail, Gmeet, Docs, Sheets, Slides</p>
                      </div>
                      <div className="item" >
                      <img src={meter80} alt="something"/>
                          <h5>Mirosoft Office </h5>
                          <p>Word, Excel, PowerPoint, Visio, Access</p>
                      </div>
                      <div className="item" >
                      <img src={meter70} alt="something"/>
                          <h5>Adobe Suite </h5>
                          <p>Acrobat, Scan, Figma</p>
                      </div>
                     
                  </Carousel>
                  </div>
                </Col>
            </Row>
        </div>
        
      
    );
  }
  
  export default Skills;