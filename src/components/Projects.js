import styled from "styled-components";
import { projects } from "../data";
import { MainSectionSubtitle, MainSectionTitle } from "./Experience";
import Project from "./Project";

const Projects = () => {
  const projectsArray = Object.values(projects);

  return (
    <>
      <MainSectionTitle>Welcome!</MainSectionTitle>
      <MainSectionSubtitle>
        These are some of the projects I've worked on during my full-stack
        bootcamp at Concordia University.
        </MainSectionSubtitle>
        <MainSectionSubtitle>
        You can click on the project image to see the project in action or you can find my Github account on the Contact page.
      </MainSectionSubtitle>
      <ProjectsDiv>
        {projectsArray.map((project) => {
            return (
          <Project key={project.id} project={project} />
        )})}
      </ProjectsDiv>
    </>
  );
};

export default Projects;

const ProjectsDiv = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
width: 80%;
position: relative;
left: 10vw;
margin-top: 3em;
grid-template-areas: 
".   placeholder  placeholder"
"project placeholder placeholder";
text-align: center;
margin-bottom: 2em;
`
