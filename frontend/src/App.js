import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Banner } from "./Components/Banner";
import { Services } from "./Components/Services";
import { About } from "./Components/About";
import { Design } from "./Components/Design";
import { Skill } from "./Components/Skill";
import { Portfolio } from "./Components/Portfolio";
import { Testimonial } from "./Components/Testimonial";
import { Brand } from "./Components/Brand";
import { Blog } from "./Components/Blog";
import { Footer } from "./Components/Footer";
import { Subscribe } from "./Components/Subscribe";
import { ScrollButton } from "./Components/ScrollButton";
import { PreLoader } from "./Components/PreLoader";
import { Cursor } from "./Components/Cursor";
import $ from jquery;
import { useEffect } from "react";
function App() {
  useEffect()=> {
    
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <PreLoader />
                <Navbar /> <Banner />
                <Services />
                <About />
                <Design />
                <Skill />
                <Portfolio />
                <Testimonial />
                <Brand />
                <Blog />
                <Subscribe />
                <Footer />
                <ScrollButton />
                <Cursor />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
