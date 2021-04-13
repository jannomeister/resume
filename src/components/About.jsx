import React, { useState, useEffect } from "react";

const About = (props) => {
  const [name, setName] = useState("");
  const [profilepic, setProfilePic] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (props.data) {
      setName(props.data.name);
      setProfilePic(`images/${props.data.image}`);
      setCity(props.data.address.city);
      setState(props.data.address.state);
      setZip(props.data.address.zip);
      setEmail(props.data.email);
    }
  }, [props.data]);

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Tim Baker Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>
            Hi, my name’s Janno and I have over 4 years of experience in the
            Information Technology industry. Currently, I work as Lead of
            Product at Hyperstacks, Inc., improving products and services for
            financial institutions by using advanced and up-to-date technology
            tools, overseeing the innovation and improvement of the product,
            identifying opportunities that lead to the growth of the product
            through innovation, and resolve strategic issues.
            <br />
            <br />
            Previously, I was a full stack developer, where I developed backend
            solutions and frontend/mobile applications for companies and
            startups to make their idea into a solid business.
          </p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {city}, {state} {zip}
                </span>
                <br />
                {/* <span>{phone}</span><br /> */}
                <span>{email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
