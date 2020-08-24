import React, { useState, useEffect } from 'react';

const Header = (props) => {
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [description, setDescription]= useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    if (props.data) {
      setName(props.data.name);
      setOccupation(props.data.occupation);
      setDescription(props.data.description);
      setCity(props.data.address.city);
    }
  }, [props.data]);

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

        <ul id="nav" className="nav">
          <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
          <li><a className="smoothscroll" href="#about">About</a></li>
          <li><a className="smoothscroll" href="#resume">Resume</a></li>
          <li><a className="smoothscroll" href="#portfolio">Works</a></li>
          {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
          {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm {name}.</h1>
          <h3>I'm a <span>{occupation}</span> based in {city}. {description}.</h3>
          <hr />
          <ul className="social">
            {props.data && props.data.social.map(net => (
              <li key={net.name}>
                <a href={net.url}>
                  <i className={net.className}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>
    </header>
  )
}

export default Header;
