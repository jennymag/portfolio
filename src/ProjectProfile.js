/*  */
import { useParams } from "react-router-dom";
import projects from "./projects";
import Styled from "styled-components";

const ProfileDiv = Styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row-reverse;
justify-content: flex-end;
background-color: white;
img {
  margin: 40px 0px 30px 30px;
  width: 60%;
  border: 1px solid lightgray;
}

`;
const InfoBox = Styled.div`
  max-width: 300px;
  padding: 20px 0 0 60px;
  margin-top: 30px;
p {
  padding-bottom: 30px;
}

h3 {
  text-transform: uppercase;
  font-size: 18px;
  padding-bottom: 10px;
  color: gray;
}
h2 {
  color: #333333;
   margin-top: 40px;
}
button {
  padding: 20px 50px 20px 50px;
  border-radius: 30px;
  margin-top: 40px;
  font-size: 16px;
  background-color: #333333;
  text-transform: uppercase;
  border: none;
  color: white;
  }
  button:hover {
    background-color: #212121;
    outline: none;
  }
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
        <h3>Category: {project.category}</h3>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <h2>Language:</h2>
        <p>{project.language}</p>
        <a href={project.link}>
          <button>Demo</button>
        </a>
      </InfoBox>
      <img src={project.img} alt={project.id} />
    </ProfileDiv>
  );
}

export default ProjectProfile;
