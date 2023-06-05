import styled from "styled-components";

const Project = ({ project }) => {
  const handleImageClick = () => {
    window.open(project.url, "_blank");
  };

  return (
    <>
      {!project.isPlaceholder ? (
        <ProjectBox>
          <ProjectImage
            onClick={handleImageClick}
            src={project.ssSource}
            alt={project.id}
          />
          <ProjectContainer>
            <TitleProject>{project.title}</TitleProject>
            <SubitleProject>Languages used: {project.language}</SubitleProject>
          </ProjectContainer>
        </ProjectBox>
      ) : (
        <PlaceholderContainer>
          <p>{project.title}</p>
        </PlaceholderContainer>
      )}
    </>
  );
};
export default Project;

const PlaceholderContainer = styled.div`
  height: 70%;
  background-image: url("assets/starsbg.gif");
  padding: 2em;
  margin: 3em;
  grid-area: placeholder;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProjectContainer = styled.div`
  height: 10vh;
  display: flex;
  flex-direction: column;
  grid-area: project;
  padding-top: 1em;
`;

const ProjectImage = styled.img`
  width: 100%;
  padding: 3%;
  transition: transform 0.3s ease-in-out;
  border-radius: 7% 7% 0 0;

  &:hover {
    cursor: pointer;
    transform: rotateY(360deg);
  }
`;
const ProjectBox = styled.div`
  background: linear-gradient(
    to bottom right,
    #625f63,
    white,
    beige,
    white,
    beige,
    white,
    #625f63
  );
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  border-radius: 5% 5% 10% 10%;
  transition: transform 0.3s ease-in-out;

  &:hover {
  transform: scale(1.5) translate(0, 1em);
}

`;

const TitleProject = styled.p`
font-size: .7em;
  font-weight: 600;
  margin-bottom: 1vh;
`;

const SubitleProject = styled.p`
font-size: .5em;
`