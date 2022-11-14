//import { Container } from "react-bootstrap";
import LeftCard from "../components/leftcard";
import RightCard from "../components/rightcard";
import Calculator from "../components/calculator";
import Signup from "../components/signup";
import Schomed from "../components/schomed";
import Dinogame from "../components/dinogame";
import Signupsignin from "../components/signupsignin";

function  Projects() {
    return (
     < >
        {/* <hr/> */}
        <h1 className="align">Projects</h1>
        <h5 className="align">Here's some of the stuff I've worked on in the past. they showcase an array of skills in HTML, CSS, FIGMA, Canva, JavaScript, C# and C++.</h5>
        <hr/>
        <Calculator></Calculator>
        <hr/>
        <Schomed></Schomed>
        <hr/>
        <Signup></Signup>
        <hr/>
        <Dinogame></Dinogame>
        <hr/>
        <Signupsignin></Signupsignin>
     </>
    );
  }
  
  export default Projects;