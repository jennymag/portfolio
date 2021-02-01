import Styled from "styled-components";
import { Link } from "react-router-dom";

const ProjectHolder = Styled.div`
h1{
padding: 70px;
}
`;

function Project(props) {
  return (
    <Link to={`/portfolio/${props.id}`}>
      <ProjectHolder>
        <h1>{props.name}</h1>
        <img src={props.img} alt={props.id} />
      </ProjectHolder>
    </Link>
  );
}
export default Project;
