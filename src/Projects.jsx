import "./Projects.css";

// Import images from the assets folder
import Project1 from "./assets/projects/project1.png";
import Project2 from "./assets/projects/project2.png";
import Project3 from "./assets/projects/project3.png";
import Project4 from "./assets/projects/project4.png";
import Project5 from "./assets/projects/project5.png";
import Project6 from "./assets/projects/project6.png";
import Project7 from "./assets/projects/project7.png";
import Project8 from "./assets/projects/project8.png";
import Project9 from "./assets/projects/project9.png";
import Project10 from "./assets/projects/project10.png";
import Project11 from "./assets/projects/project11.png";
import Project12 from "./assets/projects/project12.png";
import Project13 from "./assets/projects/project13.png";

export const Projects = () => {
  const projects = [
    { id: 1, name: "Project Alpha", date: "JAN, 20 2024", type: "Web App", ratio: "1:1", image: Project1 },
    { id: 2, name: "Project Beta", date: "JAN, 20 2024", type: "Web App", ratio: "4:3", image: Project2 },
    { id: 3, name: "Project Gamma", date: "JAN, 20 2024", type: "Web App", ratio: "3:4", image: Project3 },
    { id: 4, name: "Project Delta", date: "JAN, 20 2024", type: "Web App", ratio: "16:9", image: Project4 },
    { id: 5, name: "Project Epsilon", date: "JAN, 20 2024", type: "Web App", ratio: "9:16", image: Project5 },
    { id: 6, name: "Project Epsilon", date: "JAN, 20 2024", type: "Web App", ratio: "9:16", image: Project6 },
    { id: 7, name: "Project Epsilon", date: "JAN, 20 2024", type: "Web App", ratio: "9:16", image: Project7 },
    { id: 8, name: "Project Epsilon", date: "JAN, 20 2024", type: "Web App", ratio: "9:16", image: Project8 },
    { id: 9, name: "Project Epsilon", date: "JAN, 20 2024", type: "Web App", ratio: "9:16", image: Project9 },
    { id: 10, name: "Project Epsilon", date: "JAN, 20 2024", type: "Web App", ratio: "9:16", image: Project10 },
    { id: 11, name: "Project Epsilon", date: "JAN, 20 2024", type: "Web App", ratio: "9:16", image: Project11 },
    { id: 12, name: "Project Epsilon", date: "JAN, 20 2024", type: "Web App", ratio: "9:16", image: Project12 },
    { id: 13, name: "Project Epsilon", date: "JAN, 20 2024", type: "Web App", ratio: "9:16", image: Project13 },
  ];

  const getAspectClass = (ratio) => {
    switch (ratio) {
      case "1:1":
        return "aspect-square";
      case "4:3":
        return "aspect-[4/3]";
      case "3:4":
        return "aspect-[3/4]";
      case "16:9":
        return "aspect-video";
      case "9:16":
        return "aspect-[9/16]";
      default:
        return "aspect-square";
    }
  };

  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div key={project.id} className={`project-card ${getAspectClass(project.ratio)}`}>
          <img src={project.image} alt={project.name} className="project-image" />
          <div className="card-content">
            <div className="card-date">{project.date} • {project.type}</div>
            <div className="card-title">
              <div className="checkbox"></div>
              <span>{project.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};