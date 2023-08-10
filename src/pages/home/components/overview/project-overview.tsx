import { useState } from "react";
import { map } from "lodash";
import style from "./project-overview.module.css";
import { IStructure } from "types";

const JSXStructure = (
  structure: IStructure[],
  onClick: (item: IStructure) => void
): JSX.Element => {
  return (
    <ul className={style.list_container}>
      {map(structure, (item) => (
        <li
          key={item.name}
          className={`${style.list} ${style[item.class] ?? ""}`}
        >
          <span className={style.file_name} onClick={() => onClick(item)}>
            {item.name}
          </span>
          {item.type === "directory" &&
            item.children &&
            JSXStructure(item.children, onClick)}
        </li>
      ))}
    </ul>
  );
};

const ProjectOverview = () => {
  const [active, setActive] = useState<IStructure>();
  const STRUCTURE: IStructure[] = [
    {
      name: "public",
      type: "directory",
      class: "folder",
      description:
        "This directory contains static files that are accessible to the public. It includes an index.html file which serves as the entry point for the application.",
      children: [
        {
          name: "index.html",
          type: "file",
          class: "",
          description:
            "The index.html file is an HTML document that serves as the entry point for your web application. It's the initial file loaded by the browser and often includes links to CSS stylesheets, JavaScript scripts, and other resources. The content inside this file provides the structure of the application's user interface. It's responsible for rendering the initial layout and loading the necessary scripts for your application to function properly.",
        },
      ],
    },
    {
      name: "src",
      type: "directory",
      class: "folder",
      description:
        "The src directory holds the source code of the application. It includes various subdirectories and files that contribute to the application's functionality.",
      children: [
        {
          name: "components",
          type: "directory",
          class: "folder",
          description:
            "This directory contains reusable UI components that are used throughout the application. It helps maintain a modular structure and promotes code reusability.",
          children: [
            {
              name: "directory name",
              type: "directory",
              class: "folder",
              description:
                "A placeholder directory name where you would typically have a descriptive name for a specific set of components.",
              children: [
                {
                  name: "[file-name].tsx",
                  type: "file",
                  class: "tsx",
                  description:
                    "A TypeScript/React component file that is used to create specific UI elements or views. The .tsx extension indicates that it contains JSX syntax.",
                },
                {
                  name: "[file-name].module.css",
                  type: "file",
                  class: "css",
                  description:
                    "A CSS module file associated with the specific component. CSS modules allow you to write CSS styles in a way that scopes the styles to a particular component, preventing unintended style collisions. This makes it easier to manage and style individual components without affecting others. The .module.css extension indicates the use of CSS modules.",
                },
                {
                  name: "index.ts",
                  type: "file",
                  class: "",
                  description:
                    "An index file often used to export components or utilities from the directory. It serves as an entry point for accessing items within the directory.",
                },
              ],
            },
          ],
        },
        {
          name: "hooks",
          type: "directory",
          class: "folder",
          description:
            "This directory contains custom React hooks that encapsulate reusable logic and behavior. Hooks are used to share functionality across different components.",
          children: [
            {
              name: "[use-hook].ts",
              type: "file",
              class: "",
              description:
                "A TypeScript file that defines a custom React hook. Custom hooks enable the extraction of shared logic to be used in multiple components.",
            },
            {
              name: "index.ts",
              type: "file",
              class: "",
              description:
                "An index file often used to export components or utilities from the directory. It serves as an entry point for accessing items within the directory.",
            },
          ],
        },
        {
          name: "pages",
          type: "directory",
          class: "folder",
          description:
            "This directory holds individual page components that represent different sections of the application. Each page is typically associated with a specific URL route.",
          children: [
            {
              name: "directory name",
              type: "directory",
              class: "folder",
              description: "",
              children: [
                {
                  name: "[file-name].tsx",
                  type: "file",
                  class: "tsx",
                  description:
                    " This TypeScript/React component file represents a specific page of your web application. The name [file-name].tsx is a placeholder for the actual name of the file, which should reflect the purpose or content of the page. The .tsx extension indicates that the file contains JSX syntax, allowing you to define the structure and layout of the page using React components. Each page component usually corresponds to a specific URL route and is responsible for rendering the content and functionality associated with that route. It can include various UI elements, components, and logic tailored to the specific purpose of the page. By organizing pages as individual components, your application can maintain a modular and structured architecture, making it easier to manage and scale",
                },
                {
                  name: "[file-name].module.css",
                  type: "file",
                  class: "css",
                  description:
                    "A CSS module file associated with the specific page component. CSS modules allow you to write CSS styles in a way that scopes the styles to a particular component, preventing unintended style collisions. This makes it easier to manage and style individual components without affecting others. The .module.css extension indicates the use of CSS modules.",
                },
                {
                  name: "index.ts",
                  type: "file",
                  class: "",
                  description:
                    "An index file often used to export components or utilities from the directory. It serves as an entry point for accessing items within the directory.",
                },
              ],
            },
          ],
        },
        {
          name: "types",
          type: "directory",
          class: "folder",
          description:
            "This directory contains TypeScript type definitions used to ensure type safety and provide clear interfaces for various data structures.",
          children: [
            {
              name: "[type-name].type.ts",
              type: "file",
              class: "",
              description:
                "A TypeScript file that defines a custom type or interface used to define the shape of specific data structures in the application.",
            },
            {
              name: "index.ts",
              type: "file",
              class: "",
              description:
                "An index file often used to export components or utilities from the directory. It serves as an entry point for accessing items within the directory.",
            },
          ],
        },
        {
          name: "app.tsx",
          type: "file",
          class: "tsx",
          description:
            "The main application file that serves as the root component of the application. It typically sets up routing and other global configurations.",
        },
        {
          name: "index.tsx",
          type: "file",
          class: "tsx",
          description:
            "The entry point of the application that is responsible for rendering the root component (often the App component) into the DOM.",
        },
      ],
    },
    {
      name: "package.json",
      type: "file",
      class: "json",
      description:
        "The package.json file contains metadata about the project and its dependencies. It's used to manage project settings and dependencies using npm or yarn.",
    },
  ];
  return (
    <div className={style.project_overview}>
      <div className={style.structure}>
        {JSXStructure(STRUCTURE, (data) => setActive(data))}
      </div>
      <div className={style.description}>
        {active?.description ??
          "Select a directory or a file to see what's going on"}
      </div>
    </div>
  );
};

export default ProjectOverview;
