import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = ({ info }) => {
  const list = info.map((item, key) => <ProjectItem item={item} key={key} />);
  return <>{list}</>;
};

export default Projects;
