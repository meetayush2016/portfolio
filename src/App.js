import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
// import Contact from "./components/Contact";
// import Testimonial from "./components/Testimonial";
import Contact2 from "./components/Contact2";
import PhotoGrid from "./components/PhotoGrid";
// import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Skills/>
      {/* <Contact/> */}
      <PhotoGrid/>
      {/* <Testimonial/> */}
      <Contact2/>
      {/* <Footer/> */}
      
      
    </div>
  );
}

export default App;
