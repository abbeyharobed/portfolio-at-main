//import logo from './logo.svg';
//import Button from './components/buttons';
//import Button from "react-bootstrap/Button"
//import Carousell from './components/carousel';
// import Cardd from './components/cards';
// import {Route, Routes} from 'react-router-dom';
// import Projects from '../pages/projects';
// import Home from '../pages/home';
// import NewsLetter from './newsletter';
import './App.css';
import Navbarr from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
// import Home from './components/home';


function App() {
  return (
     <div className="App">
      <Navbarr/> 
      {/* <Home/> */}
      {/* <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/newsletter" element={<NewsLetter/>} />
      </Routes> */}
      <Footer/>
    </div>
  );
}

export default App;
