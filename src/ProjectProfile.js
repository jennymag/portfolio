/*  */
import { useParams } from "react-router-dom";
import projects from "./projects";
import Styled from "styled-components";
const ProfileDiv = Styled.div`
display: flex;
flex-direction: row-reverse;
justify-content: center;

h1 {
    paddin-lg: 20px;
}
`;
const InfoBox = Styled.div`

    border: 1px solid pink;
    max-width: 400px;

`;

function ProjectProfile() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  let project = projects.find((project) => project.id === id);

  if (project === undefined) {
    return (
      <ProfileDiv>
        <h1>404</h1>
        <h2>Sidan kan inte hittas</h2>
      </ProfileDiv>
    );
  }

  return (
    <ProfileDiv>
      <InfoBox>
        <h1>{project.name}</h1>
        <p>Description: {project.description}</p>
        <p>Language: {project.language}</p>
        <p>
          Link:
          <a href={project.link}>{project.link}</a>
        </p>
      </InfoBox>

      <div>
        <img src={project.img} alt={project.id} />'
      </div>
    </ProfileDiv>
  );
}

export default ProjectProfile;
