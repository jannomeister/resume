import React from 'react';

const Footer = (props) => {
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {props.data && props.data.social.map(net => (
                <li key={net.name}>
                  <a href={net.url}>
                    <i className={net.className}></i>
                  </a>
                </li>
              ))}
           </ul>
           <ul className="copyright">
              <li>&copy; Copyright 2020 Janno Tabamo</li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
           </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  ) 
}

export default Footer;
