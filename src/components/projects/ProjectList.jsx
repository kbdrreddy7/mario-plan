import React from "react";
import ProjectSummary from "./ProjectSummery";

import { Link } from "react-router-dom";
const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => (
          <Link to={"project/" + project.id} key={project.id}>
            <ProjectSummary project={project} key={project.id} />
          </Link>
        ))}
    </div>
  );
};

export default ProjectList;
