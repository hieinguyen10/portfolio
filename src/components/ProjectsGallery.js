import React, { useEffect, useState } from "react";
import initialProjects from "../data/projects";
import './styles/ProjectsGallery.css';

const ProjectsGallery = () => {
    const [projects, setProects] = useState(initialProjects);
    const [isLengthEight, setIsLengEight] = useState(false);
    const screenshots = require.context('../assets/screenShots', false, /\.(png|jpe?g|gif)$/);

    useEffect(() =>{
        if (projects.length < 8) {
            const newProjects = [...projects];
            while (newProjects.length < 8) {
                newProjects.push({ name: "comingsoon", description: "comingsoon" });
        }
        setProects(newProjects);
    }

    if (projects.length > 8) {
        const newProjects = [];
        for (let i=0; i<8; i++) {
            newProjects.push(projects[i])
        }
        setProects(newProjects);
    }

    setIsLengEight(projects.length === 8);
    }, [projects]);

    const checkScreenshotPath = (projectName) => {
        try {
            const matchingSceenshot = screenshots.keys().find((key) =>
              key.includes(`/${projectName}.`)
            );
            return matchingSceenshot ? screenshots(matchingSceenshot) : screenshots('./unknown.png');
          } catch (e) {
            return screenshots('./unknown.png');
          }
    };

    return (
        <div className="projectsGallery">
            <h2>PROJECTS</h2>
            {projects.map((project, index) => (
                <span style={{'--i': index +1}} key={index}>
                    <img src={checkScreenshotPath(project.name)} alt={""}></img>
                    <div className="description">{project.description}</div>
                </span>
            ))}
        </div>
    )
}

export default ProjectsGallery;