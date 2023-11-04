import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import "./App.css";
import Skills from "./components/Skills/Skills";
import ScrollToTopButton from "./utils/ScrollButton";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Skills />
      <AboutMe />
      <Projects />
      <Contact />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;