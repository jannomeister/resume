import React, { useState, useEffect } from "react";
// import ReactGA from 'react-ga';
import $ from "jquery";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";

const App = () => {
  const [resumeData, setResumeData] = useState({});

  // ReactGA.initialize('UA-110570651-1');
  // ReactGA.pageview(window.location.pathname);

  useEffect(() => {
    getResumeData();
  }, []);

  const getResumeData = () => {
    $.ajax({
      url: "/resumeData.json",
      dataType: "json",
      cache: false,
      success: (data) => setResumeData(data),
      error: (xhr, status, err) => alert(err),
    });
  };

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Footer data={resumeData.main} />
    </div>
  );
};

export default App;
