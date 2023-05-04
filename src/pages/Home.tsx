import React from "react";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import Projects from "../components/Projects";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Introduction />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;