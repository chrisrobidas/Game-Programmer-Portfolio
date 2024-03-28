import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Navbar';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import './Home.css';

function Home() {
  return (
    <>
      <Navbar/>
      <div id='content'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Portfolio/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer/>
    </>
  )
}

export default Home;