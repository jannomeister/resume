import React from "react";

const Portfolio = (props) => {
  const Project = ({ item }) => (
    <div className="columns portfolio-item">
      <div className="item-wrap">
        <a
          href={item.url}
          title={item.title}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={`images/portfolio/${item.image}`} alt={item.title} />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>{item.title}</h5>
              <p>{item.category}</p>
            </div>
          </div>
          <div className="link-icon">
            <i className="fa fa-link"></i>
          </div>
        </a>
      </div>
    </div>
  );

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Personal Works.</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {props.data &&
              props.data.projects.map((project) => (
                <Project key={project.title} item={project} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
