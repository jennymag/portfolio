import Styled from "styled-components";
import { Link } from "react-router-dom";

const ProjectHolder = Styled.div`
line-height: 0;
background-color: white;
position: relative;
overflow: hidden;
border: 1px solid #d3d3d359;
img {
  width: 100%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  -webkit-filter: blur(3px);
  transition: transform 0.1s;  
  transform: scale(1.2);
}
}
img:hover {
opacity: 1;
 -webkit-filter: blur(0);
 transform: scale(1);
}
h3{
  opacity: 1;
  color: #333333;
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);  
  font-size: 22px;
}
  &:hover h3{
  opacity: 0;
}

`;

function Project(props) {
  return (
    <Link to={`/portfolio/${props.id}`}>
      <ProjectHolder>
        <img src={props.img} alt={props.id} />
        <h3>{props.name}</h3>
      </ProjectHolder>
    </Link>
  );
}
export default Project;
