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
import { Cursor } from "./Components/Cursor";
import { BreadCrumb } from "./Components/BreadCrumb";
import { Contact } from "./Components/Contact";
import BlogListPage from "./Components/BlogList";

function App() {
  // myScript.js
  function myFunction() {
    const elements = document.querySelectorAll(".my-element");
    // Your JavaScript code here
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
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
          <Route
            path="/contact.html"
            element={
              <>
                <Navbar />
                <BreadCrumb page="Contact" />
                <Contact />
                <Subscribe />
                <Footer />
              </>
            }
          />
          <Route
            path="/blog_list.html"
            element={
              <>
                <Navbar />
                <BreadCrumb page="Blog List" />
                <BlogListPage />
                <Subscribe />
                <Footer />
              </>
            }
          />
          <Route
            path="/blog_details.html"
            element={
              <>
                <Navbar />
                <BreadCrumb page="Blog List" />
                <BlogListPage />
                <Subscribe />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
