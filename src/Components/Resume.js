import React from 'react';

const Resume = ({ data }) => {

  const education = data?.education.map((educ, idx) => (
    <div key={educ.school + idx}>
      <h3>{educ.school}</h3>
      <p className="info">{educ.degree} <span>&bull;</span><em className="date">{educ.graduated}</em></p>
      <p>{educ.description}</p>
    </div>
  ));

  const work = data?.work.map((work, idx) => (
    <div key={work.company + idx}>
      <h3>{work.company}</h3>
      <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
      <p>{work.description}</p>
    </div>
  ));

  const skills = data?.skills.map((skill, idx) => (
    <li key={skill.name + idx}>
      <span style={{ width: skill.level }} className={`bar-expand ${skill.name.toLowerCase()}`}></span>
      <em>{skill.name}</em>
    </li>
  ));
  
  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1><span>Education</span></h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1><span>Work</span></h1>
        </div>

        <div className="nine columns main-col">
          {work}
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Favorite Tech</span></h1>
        </div>

        <div>
          <div className="nine columns main-col">
            <p className="lead center">
              I'm a tinkerer and am always interested in playing around with new technologies but these are the ones that have really won me over
            </p>
          </div>
        
          <ul className="bgrid-quarters s-bgrid-thirds cf">
            <div className="columns feature-item" style={{ textAlign: 'center', marginTop: '2.5em', paddingLeft: '2em', paddingRight: '2em' }}>
              <img className="skill" style={{ maxWidth: '65%' }} src="images/favorite_tech/git.png" alt="Git" />
              <h5>Git</h5>
              <p style={{ overflowWrap: 'break-word' }}>I use Git for all of my projects so far. I have used Git for version control in my own personal projects or in my teams.</p>
            </div>
            <div className="columns feature-item" style={{ textAlign: 'center', marginTop: '2.5em', paddingLeft: '2em', paddingRight: '2em' }}>
              <img className="skill" style={{ maxWidth: '65%' }} src="images/favorite_tech/angular.png" alt="Angular" />
              <h5>Angular</h5>
              <p style={{ overflowWrap: 'break-word' }}>I used Angular for almost 85% of my projects, from building web applications to creating mobile applications.</p>
            </div>
            <div className="columns feature-item" style={{ textAlign: 'center', marginTop: '2.5em', paddingLeft: '2em', paddingRight: '2em' }}>
              <img className="skill" style={{ maxWidth: '65%' }} src="images/favorite_tech/react.jpg" alt="ReactJS" />
              <h5>ReactJS</h5>
              <p style={{ overflowWrap: 'break-word' }}>I am fairly new to React and really did not like it at first. But when I try to give it a shot, that's the time I already fall in love with it.</p>
            </div>
            <div className="columns feature-item" style={{ textAlign: 'center', marginTop: '2.5em', paddingLeft: '2em', paddingRight: '2em' }}>
              <img className="skill" style={{ maxWidth: '65%' }} src="images/favorite_tech/nativescript.png" alt="Nativescript" />
              <h5>Nativescript</h5>
              <p style={{ overflowWrap: 'break-word' }}>I used it because it's truly a native cross-platform framework and it was built using javascript, Angular and ReactJS are also supported!</p>
            </div>

            <div className="columns feature-item" style={{ textAlign: 'center', marginTop: '2.5em', paddingLeft: '2em', paddingRight: '2em' }}>
              <img className="skill" style={{ maxWidth: '65%' }} src="images/favorite_tech/nodejs.png" alt="NodeJS" />
              <h5>NodeJS</h5>
              <p style={{ overflowWrap: 'break-word' }}>This tech helps me to build server side application using it's awesome frameworks</p>
            </div>

            <div className="columns feature-item" style={{ textAlign: 'center', marginTop: '2.5em', paddingLeft: '2em', paddingRight: '2em' }}>
              <img className="skill" style={{ maxWidth: '65%' }} src="images/favorite_tech/nodejs.png" alt="ExpressJS" />
              <h5>ExpressJS</h5>
              <p style={{ overflowWrap: 'break-word' }}>This is the first framework of NodeJS I used when I'm building server side applications and this is still my favorite</p>
            </div>

            <div className="columns feature-item" style={{ textAlign: 'center', marginTop: '2.5em', paddingLeft: '2em', paddingRight: '2em' }}>
              <img className="skill" style={{ maxWidth: '65%' }} src="images/favorite_tech/nestjs.webp" alt="NestJS" />
              <h5>NestJS</h5>
              <p style={{ overflowWrap: 'break-word' }}>This is my all time favorite in all of the server side frameworks that I used. This was built using Typescript and it also supports ExpressJS and Fastify.</p>
            </div>

            <div className="columns feature-item" style={{ textAlign: 'center', marginTop: '2.5em', paddingLeft: '2em', paddingRight: '2em' }}>
              <img className="skill" style={{ maxWidth: '65%' }} src="images/favorite_tech/bootstrap4.jpg" alt="Bootstrap 4" />
              <h5>Bootstrap 4</h5>
              <p style={{ overflowWrap: 'break-word' }}>I use Bootstrap more often than not when designing the layout for my sites. It is the framework I am most familiar with and can therefore design more quickly than with others.</p>
            </div>
          </ul>
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>

        <div className="nine columns main-col">
          <p>{data?.skillmessage}</p>
          <div className="bars">
            <ul className="skills">
              {skills}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume;
