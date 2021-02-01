import Styled from "styled-components";
import Project from "./Project";
import projects from "./projects";

const Content = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 60px;

h1 {
  padding: 20px;
}
`;

const ProjectContainer = Styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
width: 1000px;

div{
border: 1px solid black;
padding: 20px;  
margin: 10px;
}

`;

function Portfolio() {
  return (
    <Content>
      <h1>My projects</h1>
      <ProjectContainer>
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </ProjectContainer>
    </Content>
  );
}

export default Portfolio;
