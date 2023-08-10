import React from "react";
import style from "./project-overview.module.css";

interface IStructure {
  name: string;
  logo: string;
}

const ProjectOverview = () => {
  const STRUCTURE = [];
  return (
    <div className={style.project_overview}>
      <div className={style.structure}>structure</div>
      <div className={style.description}>hi</div>
    </div>
  );
};

export default ProjectOverview;
