import { lazy } from "react";
import style from "./home.module.css";

const ProjectOverview = lazy(() => import("./components/overview"));
const TechnicalInsights = lazy(() => import("./components/insights"));
const InteractivePlayground = lazy(() => import("./components/playground"));

const Home = () => {
  return (
    <div className={style.home}>
      <section id="project-overview">
        <ProjectOverview />
      </section>
      <section id="technical-insights">
        <TechnicalInsights />
      </section>
      <section id="interactive-playground">
        <InteractivePlayground />
      </section>
    </div>
  );
};

export default Home;
