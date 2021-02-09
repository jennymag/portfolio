import github from "./image/github.png";
import linkedin from "./image/linkedin.png";
import email from "./image/email.png";
import Styled from "styled-components";
const IconContainer = Styled.div`
  img {
    width: 37px;
    padding: 10px;
  }
`;

function Icons() {
  return (
    <IconContainer>
      <a href="https://linkedin.com/in/jenny-magnessen/a85a84135">
        <img src={linkedin} alt="linkedin" />
      </a>
      <a href="https://github.com/jennymag">
        <img src={github} alt="github" />
      </a>
      <a href="mailto: jenny.magnessen@hotmail.com">
        <img src={email} alt="email" />
      </a>
    </IconContainer>
  );
}
export default Icons;
