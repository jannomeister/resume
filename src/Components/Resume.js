import React from 'react';

const Resume = (props) => {

  const Education = ({ items }) => (
    <div className="row education">
      <div className="three columns header-col">
        <h1><span>Education</span></h1>
      </div>

      <div className="nine columns main-col">
        <div className="row item">
            <div className="twelve columns">
              {items.map((item, index) => (
                <div key={item.school + index}>
                  <h3>{item.school}</h3>
                  <p className="info">{item.degree} <span>&bull;</span><em className="date">{item.graduated}</em></p>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );

  const Work = ({ items }) => (
    <div className="row work">
      <div className="three columns header-col">
        <h1><span>Work</span></h1>
      </div>

      <div className="nine columns main-col">
        {items.map((item, index) => (
          <div key={item.company + index}>
            <h3>{item.company}</h3>
            <p className="info">{item.title}<span>&bull;</span> <em className="date">{item.years}</em></p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const FavoriteTech = ({ message, items }) => (
    <div className="row skill">
      <div className="three columns header-col">
        <h1><span>Favorite Tech</span></h1>
      </div>
      <div>
        <div className="nine columns main-col">
          <p className="lead center">
            {message}
          </p>
        </div>

        <ul className="bgrid-quarters s-bgrid-thirds cf">
          {items.map((item, index) => (
            <div key={item.name + index} className="columns feature-item" style={{ textAlign: 'center', marginTop: '2.5em', paddingLeft: '2em', paddingRight: '2em' }}>
              <img className="skill" style={{ maxWidth: '65%' }} src={`images/favorite_tech/${item.image}`} alt={item.name} />
              <h5>{item.name}</h5>
              <p style={{ overflowWrap: 'break-word' }}>{item.description}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );

  const Skill = ({ message, items }) => (
    <div className="row skill">
      <div className="three columns header-col">
        <h1><span>Skills</span></h1>
      </div>

      <div className="nine columns main-col">
        <p>{message}</p>
        <div className="bars">
          <ul className="skills">
            {items.map((item, index) => (
              <li key={item.name + index}>
                <span style={{ width: item.level }} className={`bar-expand ${item.name.toLowerCase()}`}></span>
                <em>{item.name}</em>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <section id="resume">
      {props.data && <Education items={props.data.education} />}
      {props.data && <Work items={props.data.work} />}
      {props.data && <FavoriteTech message={props.data.techMessage} items={props.data.favoriteTech} />}
      {props.data && <Skill message={props.data.skillmessage} items={props.data.skills} />}
    </section>
  )
}

export default Resume;
