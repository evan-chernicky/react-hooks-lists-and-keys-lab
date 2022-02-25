import React from "react";

function ProjectItem({name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
      {renderTechnologies(technologies)}
      </div>
    </div>
  );
}

function renderTechnologies(technologies) {

  const technology = technologies.map(technology => <span key={technology}>{technology}</span> )

  return technology

}

export default ProjectItem;
