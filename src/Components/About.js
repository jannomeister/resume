import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>
              Hi, my name’s Janno and I have over 4 years of experience in the Information Technology industry. Currently, I work as Lead of Product at Hyperstacks, Inc., improving products and services for financial institutions by using advanced and up-to-date technology tools, overseeing the innovation and improvement of the product, identifying opportunities that lead to the growth of the product through innovation, and resolve strategic issues.<br /><br />

              Previously, I was a full stack developer, where I developed backend solutions and frontend/mobile applications for companies and startups to make their idea into a solid business.
            </p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>
                  {city}, {state}, {zip}
                </span><br />
						   {/* <span>{phone}</span><br /> */}
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
